SELECT
  DISTINCT `M`.`BUYER_MODEL_NAME` AS `BUYER_MODEL_NAME`,
  `M`.`T_HEAT_W` AS `T_HEAT_W`,
  `M`.`T_COOL_W` AS `T_COOL_W`
FROM
  (
    `LATS_NOISE`.`T_NOISE_MODELSPEC` `N`
    JOIN (
      SELECT
        `LATS_CMN`.`T_MASTER_MV_ODU`.`BUYER_MODEL_NAME` AS `BUYER_MODEL_NAME`,
        `LATS_CMN`.`T_MASTER_MV_ODU`.`T_HEAT_W` AS `T_HEAT_W`,
        `LATS_CMN`.`T_MASTER_MV_ODU`.`T_COOL_W` AS `T_COOL_W`
      FROM
        `LATS_CMN`.`T_MASTER_MV_ODU`
      WHERE
        `LATS_CMN`.`T_MASTER_MV_ODU`.`DESCRIPTION` = 'MULTI V i'
        AND (
          `LATS_CMN`.`T_MASTER_MV_ODU`.`NOTUSEDCOUNTRY` NOT LIKE '%/7/%'
          OR `LATS_CMN`.`T_MASTER_MV_ODU`.`NOTUSEDCOUNTRY` IS NULL
        )
        AND `LATS_CMN`.`T_MASTER_MV_ODU`.`LOCATION` LIKE '%/7/%'
        AND `LATS_CMN`.`T_MASTER_MV_ODU`.`VISIBLE` = 1
        AND `LATS_CMN`.`T_MASTER_MV_ODU`.`COMBINATION` NOT LIKE '%,%'
        AND `LATS_CMN`.`T_MASTER_MV_ODU`.`CODE_MULTILINK` = 1
    ) `M` ON(`N`.`MODEL_NAME` = `M`.`BUYER_MODEL_NAME`)
  )