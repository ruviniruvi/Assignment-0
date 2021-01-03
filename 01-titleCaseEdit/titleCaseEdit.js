function titleCaseEdit(title) {
  // Insert code here;
  return title.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

// Do not edit this line;
module.exports = titleCaseEdit;