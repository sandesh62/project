export const mockData = {
  title: "Reliance Industries Ltd.",
  subTitle: "Digital Marketing Company",
  isVerified: true,
  isAd: true,
  countryCode: "IN",
  descriptionList: [
    "Digital Marketing",
    "GSuite Google Mail",
    "Mobile Apps Development",
    "Web & E-commerce",
    "Branding & Creative",
    "IPad Apps",
  ],
  address: {
    addressLine:
      "504, NBC Complex, Plot #43, Sector 11,Opp IDBI Bank, CBD Belapur",
    city: "Navi Mumbai",
    pin: "4000614",
  },
  year: "2017",
  phone: "+91 9594 31 5559",
  timing: "Open 8am Close 8pm",
  order: "1000-2000",
  team: "1-1000",
  responseRate: "20%",
  image: "",
  reviewRating: 3.5,
  reviewTotal: 975623,
};

export const mockDataList = [mockData, mockData, mockData];

export const filterList = [
  { title: "Locations", options: ["Mumbai", "Kolkata", "Delhi"] },
  { title: "Industry", options: ["Option1", "Option2", "Option3"] },
  { title: "Business Type", options: ["Option1", "Option2", "Option3"] },
  { title: "Company Type", options: ["Option1", "Option2"] },
  { title: "Filter By High to Low", options: ["Option1"] },
  { title: "Sort By", options: ["Option1", "Option2"] },
  { title: "Number of Employees", options: ["Option1"] },
];
