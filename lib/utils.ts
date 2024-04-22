import "./utils.d";

String.prototype.format = function (arg) {
  let formatted = String(this),
    i = 0;
  while (/%s/.test(formatted)) formatted = formatted.replace("%s", arg[i++]);
  return formatted;
};
