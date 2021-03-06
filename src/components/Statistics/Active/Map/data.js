export const dataSource = (data) => ({
  chart: {
    caption: "Active cases of Covid-19",
    captionalignment: "center",
    theme: "fusion",
    formatnumberscale: "0",
    entityfillhovercolor: "#E5E5E9",
    entitytooltext:
      "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lname</div><div style='font-size:12px; color:black'>$value</div>"
  },
  colorrange: {
    startlabel: "Low",
    endlabel: "High",
    code: "#D7DDFF",
    minvalue: "0",
    gradient: "1",
    color: [
      {
        maxvalue: "50000000",
        code: "#36469F"
      }
    ]
  },
  data
});