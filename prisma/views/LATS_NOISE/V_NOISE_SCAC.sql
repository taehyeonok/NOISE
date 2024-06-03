SELECT
  DISTINCT `M`.`BUYER_MODEL_NAME` AS `BUYER_MODEL_NAME`,
  `M`.`T_HEAT_W` AS `T_HEAT_W`,
  `M`.`T_COOL_W` AS `T_COOL_W`
FROM
  (
    `LATS_NOISE`.`T_NOISE_MODELSPEC` `N`
    JOIN (
      SELECT
        substring_index(
          `LATS_CMN`.`T_MASTER_MS_ODU`.`BUYER_MODEL_NAME`,
          ' ',
          1
        ) AS `BUYER_MODEL_NAME`,
        `LATS_CMN`.`T_MASTER_MS_ODU`.`T_HEAT_W` AS `T_HEAT_W`,
        `LATS_CMN`.`T_MASTER_MS_ODU`.`T_COOL_W` AS `T_COOL_W`
      FROM
        `LATS_CMN`.`T_MASTER_MS_ODU`
      WHERE
        `LATS_CMN`.`T_MASTER_MS_ODU`.`DESCRIPTION` = 'Standard Inverter'
        AND `LATS_CMN`.`T_MASTER_MS_ODU`.`LOCATION` LIKE '%/7/%'
        AND (
          `LATS_CMN`.`T_MASTER_MS_ODU`.`NOTUSEDCOUNTRY` NOT LIKE '%/7/%'
          OR `LATS_CMN`.`T_MASTER_MS_ODU`.`NOTUSEDCOUNTRY` IS NULL
        )
        AND `LATS_CMN`.`T_MASTER_MS_ODU`.`VISIBLE` <> '0'
        AND `LATS_CMN`.`T_MASTER_MS_ODU`.`COMP_COOLANT` = 'R32'
      UNION
      ALL
      SELECT
        substring_index(
          `LATS_CMN`.`T_MASTER_MS_ODU`.`BUYER_MODEL_NAME`,
          ' ',
          1
        ) AS `BUYER_MODEL_NAME`,
        `LATS_CMN`.`T_MASTER_MS_ODU`.`T_HEAT_W` AS `T_HEAT_W`,
        `LATS_CMN`.`T_MASTER_MS_ODU`.`T_COOL_W` AS `T_COOL_W`
      FROM
        `LATS_CMN`.`T_MASTER_MS_ODU`
      WHERE
        `LATS_CMN`.`T_MASTER_MS_ODU`.`DESCRIPTION` = 'Standard Inverter'
        AND `LATS_CMN`.`T_MASTER_MS_ODU`.`LOCATION` LIKE '%/7/%'
        AND (
          `LATS_CMN`.`T_MASTER_MS_ODU`.`NOTUSEDCOUNTRY` NOT LIKE '%/7/%'
          OR `LATS_CMN`.`T_MASTER_MS_ODU`.`NOTUSEDCOUNTRY` IS NULL
        )
        AND `LATS_CMN`.`T_MASTER_MS_ODU`.`VISIBLE` <> '0'
        AND `LATS_CMN`.`T_MASTER_MS_ODU`.`COMP_COOLANT` = 'R410A'
        AND `LATS_CMN`.`T_MASTER_MS_ODU`.`COMP_TYPE` = 'Hermetically Sealed Scroll'
    ) `M` ON(`N`.`MODEL_NAME` = `M`.`BUYER_MODEL_NAME`)
  )