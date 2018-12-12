exports.convertToCSV = object => {
  let dataArr = [];
  let addChildren = entry => {
    dataArr.push({
      firstName: entry.firstName,
      lastName: entry.lastName,
      county: entry.county,
      city: entry.city,
      role: entry.role,
      sales: entry.sales
    });
    if (entry.children.length) {
      entry.children.forEach(child => {
        addChildren(child);
      });
    }
  };
  addChildren(object);
  let csvReportString = "firstName,lastName,county,city,role,sales";
  dataArr.forEach(entry => {
    csvReportString += `\n${entry.firstName},${entry.lastName},${
      entry.county
    },${entry.city},${entry.role},${entry.sales}`;
  });
  return csvReportString;
};

exports.convertCSVToHTML = csvReport => {
  let csvHTML = csvReport.split("\n").join("<br>");
  return csvHTML;
};
