export interface State {
  name: string;
  abbr: string;
  slug: string;
  statOfLimitations: string;
  faultSystem: string;
  minInsurance: string;
  lyftRegulations: string;
  tncLaw: boolean;
  tncLawYear?: number;
  lyftInsuranceTiers: {
    appOff: string;
    waitingForRide: string;
    enRoute: string;
  };
  uniqueLaws: string[];
  majorLyftMarkets: string[];
  annualLyftAccidents: number;
  uniqueFacts: string[];
}

export const states: State[] = [
  {
    name: "Alabama",
    abbr: "AL",
    slug: "alabama",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2018",
    tncLaw: true,
    tncLawYear: 2018,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence can bar recovery if victim is 1% at fault", "TNC drivers must pass background checks", "Airport pickup regulations vary by city"],
    majorLyftMarkets: ["Birmingham", "Montgomery", "Huntsville", "Mobile"],
    annualLyftAccidents: 450,
    uniqueFacts: ["One of few contributory negligence states - critical for Lyft claims", "Lyft launched in Alabama in 2014"]
  },
  {
    name: "Alaska",
    abbr: "AK",
    slug: "alaska",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "50/100/25",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Higher minimum insurance requirements than most states", "Cold weather creates unique Lyft hazards", "Limited Lyft availability outside Anchorage"],
    majorLyftMarkets: ["Anchorage", "Fairbanks"],
    annualLyftAccidents: 85,
    uniqueFacts: ["Extreme weather conditions affect Lyft safety year-round", "Higher insurance minimums provide better protection"]
  },
  {
    name: "Arizona",
    abbr: "AZ",
    slug: "arizona",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/15",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Early adopter of Lyft regulations", "Self-driving vehicle testing hub", "Phoenix is major Lyft testing ground"],
    majorLyftMarkets: ["Phoenix", "Tucson", "Scottsdale", "Mesa", "Tempe", "Chandler"],
    annualLyftAccidents: 2800,
    uniqueFacts: ["Home to Lyft's self-driving car testing program", "First fatal autonomous Lyft accident occurred in Tempe (2018)", "Year-round warm weather means consistent Lyft demand"]
  },
  {
    name: "Arkansas",
    abbr: "AR",
    slug: "arkansas",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["3-year statute of limitations gives more time to file", "Cannot recover if more than 50% at fault"],
    majorLyftMarkets: ["Little Rock", "Fayetteville", "Fort Smith"],
    annualLyftAccidents: 380,
    uniqueFacts: ["Longer statute of limitations than neighboring states", "Growing Lyft presence in university towns"]
  },
  {
    name: "California",
    abbr: "CA",
    slug: "california",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/5",
    lyftRegulations: "First state to regulate TNCs (2013)",
    tncLaw: true,
    tncLawYear: 2013,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["AB5 law affects driver classification", "CPUC regulates Lyft companies", "Prop 22 allows drivers to remain contractors", "Strictest background check requirements"],
    majorLyftMarkets: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Oakland", "Sacramento", "Long Beach"],
    annualLyftAccidents: 15000,
    uniqueFacts: ["Lyft was founded in San Francisco (2009)", "Highest Lyft usage in the nation", "AB5 and Prop 22 created landmark gig worker laws", "First state to establish TNC regulatory framework"]
  },
  {
    name: "Colorado",
    abbr: "CO",
    slug: "colorado",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    lyftRegulations: "State-regulated since 2014",
    tncLaw: true,
    tncLawYear: 2014,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 125 established TNC regulations", "Denver International Airport has specific Lyft zones", "Mountain resort areas have special regulations"],
    majorLyftMarkets: ["Denver", "Colorado Springs", "Aurora", "Boulder", "Fort Collins"],
    annualLyftAccidents: 3200,
    uniqueFacts: ["Second state to pass comprehensive TNC legislation", "High Lyft demand for ski resort transportation", "Denver is one of Lyft's top 10 markets"]
  },
  {
    name: "Connecticut",
    abbr: "CT",
    slug: "connecticut",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Late adopter of Lyft regulations", "High insurance requirements", "Bradley Airport has designated pickup zones"],
    majorLyftMarkets: ["Hartford", "New Haven", "Stamford", "Bridgeport"],
    annualLyftAccidents: 950,
    uniqueFacts: ["High commuter Lyft usage to NYC", "Strong consumer protection laws benefit accident victims"]
  },
  {
    name: "Delaware",
    abbr: "DE",
    slug: "delaware",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated Lyft activity", "Philadelphia Airport serves many Delaware riders"],
    majorLyftMarkets: ["Wilmington", "Newark", "Dover"],
    annualLyftAccidents: 280,
    uniqueFacts: ["Many residents use Lyft to reach Philadelphia and Baltimore airports", "Corporate headquarters concentration drives business Lyft demand"]
  },
  {
    name: "District of Columbia",
    abbr: "DC",
    slug: "washington-dc",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/10",
    lyftRegulations: "First jurisdiction to legalize Lyft (2014)",
    tncLaw: true,
    tncLawYear: 2014,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes claims difficult", "First to officially legalize Uber/Lyft", "Strict driver requirements"],
    majorLyftMarkets: ["Washington DC"],
    annualLyftAccidents: 2400,
    uniqueFacts: ["One of highest Lyft usage rates per capita", "Contributory negligence is a major hurdle for claims", "Government workers and tourists drive huge demand"]
  },
  {
    name: "Florida",
    abbr: "FL",
    slug: "florida",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "10/20/10",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations (longest)", "No-fault PIP insurance required", "Theme park areas have high Lyft density"],
    majorLyftMarkets: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "West Palm Beach"],
    annualLyftAccidents: 12000,
    uniqueFacts: ["Second highest Lyft usage after California", "Tourism drives massive Lyft demand", "4-year statute of limitations is most favorable for victims", "No-fault insurance adds complexity to claims"]
  },
  {
    name: "Georgia",
    abbr: "GA",
    slug: "georgia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 190 established TNC framework", "Atlanta airport is one of busiest for Lyft", "Lyft insurance gaps addressed by law"],
    majorLyftMarkets: ["Atlanta", "Savannah", "Augusta", "Athens"],
    annualLyftAccidents: 5500,
    uniqueFacts: ["Atlanta Hartsfield-Jackson is world's busiest airport - massive Lyft demand", "Early adopter of comprehensive Lyft laws"]
  },
  {
    name: "Hawaii",
    abbr: "HI",
    slug: "hawaii",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/10",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault PIP insurance required", "Island geography limits service areas", "Tourism-heavy demand patterns"],
    majorLyftMarkets: ["Honolulu", "Maui", "Kona"],
    annualLyftAccidents: 650,
    uniqueFacts: ["Tourism drives nearly all Lyft demand", "Island geography creates unique accident patterns", "High cost of living means high Lyft fares"]
  },
  {
    name: "Idaho",
    abbr: "ID",
    slug: "idaho",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 195 established Lyft framework", "Rural areas have limited coverage"],
    majorLyftMarkets: ["Boise", "Idaho Falls", "Meridian"],
    annualLyftAccidents: 320,
    uniqueFacts: ["Rapidly growing Boise market", "Limited Lyft availability in rural areas"]
  },
  {
    name: "Illinois",
    abbr: "IL",
    slug: "illinois",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["City of Chicago has additional regulations", "O'Hare and Midway have designated pickup zones", "Strong consumer protection laws"],
    majorLyftMarkets: ["Chicago", "Springfield", "Peoria", "Rockford", "Champaign"],
    annualLyftAccidents: 8500,
    uniqueFacts: ["Chicago is one of Lyft's largest markets globally", "O'Hare Airport is major Lyft hub", "City and state regulations sometimes conflict"]
  },
  {
    name: "Indiana",
    abbr: "IN",
    slug: "indiana",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SEA 117 established TNC rules", "Indianapolis Motor Speedway events create surge demand"],
    majorLyftMarkets: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
    annualLyftAccidents: 1800,
    uniqueFacts: ["Indy 500 creates massive annual Lyft demand", "Major college towns have high student Lyft usage"]
  },
  {
    name: "Iowa",
    abbr: "IA",
    slug: "iowa",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/15",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Rural coverage remains limited", "University towns have concentrated service"],
    majorLyftMarkets: ["Des Moines", "Cedar Rapids", "Iowa City"],
    annualLyftAccidents: 420,
    uniqueFacts: ["University of Iowa campus drives Lyft demand", "Weather creates seasonal usage patterns"]
  },
  {
    name: "Kansas",
    abbr: "KS",
    slug: "kansas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 117 established TNC framework", "Kansas City metro spans state line"],
    majorLyftMarkets: ["Kansas City (KS)", "Wichita", "Overland Park", "Lawrence"],
    annualLyftAccidents: 580,
    uniqueFacts: ["Kansas City metro area shared with Missouri creates jurisdictional complexities", "University town demand in Lawrence"]
  },
  {
    name: "Kentucky",
    abbr: "KY",
    slug: "kentucky",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 86 established TNC rules", "Kentucky Derby creates massive annual surge", "No-fault PIP insurance required"],
    majorLyftMarkets: ["Louisville", "Lexington", "Bowling Green"],
    annualLyftAccidents: 980,
    uniqueFacts: ["Kentucky Derby is one of biggest Lyft events annually", "Louisville airport sees significant Lyft traffic", "Pure comparative negligence is favorable for victims"]
  },
  {
    name: "Louisiana",
    abbr: "LA",
    slug: "louisiana",
    statOfLimitations: "1 year",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - shortest in US", "Mardi Gras creates extreme surge demand", "French Quarter has special regulations"],
    majorLyftMarkets: ["New Orleans", "Baton Rouge", "Shreveport"],
    annualLyftAccidents: 2100,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Mardi Gras is one of biggest Lyft events in US", "New Orleans has extremely high Lyft usage per capita", "Tourism and nightlife drive 24/7 demand"]
  },
  {
    name: "Maine",
    abbr: "ME",
    slug: "maine",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "50/100/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations - longest in US", "Higher insurance minimums", "Limited service in rural areas"],
    majorLyftMarkets: ["Portland", "Bangor", "Lewiston"],
    annualLyftAccidents: 180,
    uniqueFacts: ["6-year statute of limitations is most favorable in nation", "Tourism season creates summer surge demand", "Higher insurance minimums provide better coverage"]
  },
  {
    name: "Maryland",
    abbr: "MD",
    slug: "maryland",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/15",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence - extremely difficult to recover", "BWI Airport has designated Lyft zones", "DC metro area spans jurisdiction"],
    majorLyftMarkets: ["Baltimore", "Bethesda", "Silver Spring", "Columbia"],
    annualLyftAccidents: 2800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "High DC commuter Lyft usage", "Baltimore and DC metro create overlapping service areas"]
  },
  {
    name: "Massachusetts",
    abbr: "MA",
    slug: "massachusetts",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/5",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 4049 established comprehensive regulations", "Boston has additional city requirements", "Logan Airport has specific pickup procedures"],
    majorLyftMarkets: ["Boston", "Cambridge", "Worcester", "Springfield"],
    annualLyftAccidents: 4200,
    uniqueFacts: ["Boston is one of oldest and most established Lyft markets", "High college student population drives demand", "No-fault PIP insurance adds complexity"]
  },
  {
    name: "Michigan",
    abbr: "MI",
    slug: "michigan",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "50/100/10",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault insurance state with unique rules", "Detroit is major Lyft market", "Higher insurance minimums"],
    majorLyftMarkets: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"],
    annualLyftAccidents: 3400,
    uniqueFacts: ["No-fault insurance creates unique claim procedures", "Detroit's auto industry connection to Lyft partnerships", "University of Michigan drives Ann Arbor demand"]
  },
  {
    name: "Minnesota",
    abbr: "MN",
    slug: "minnesota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/10",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault PIP insurance", "Minneapolis-St. Paul has high Lyft density"],
    majorLyftMarkets: ["Minneapolis", "St. Paul", "Rochester", "Duluth"],
    annualLyftAccidents: 1850,
    uniqueFacts: ["6-year statute gives maximum time to file claims", "Twin Cities are major Lyft market", "Mall of America drives significant Lyft traffic"]
  },
  {
    name: "Mississippi",
    abbr: "MS",
    slug: "mississippi",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 1381 established TNC rules", "Limited urban areas for Lyft"],
    majorLyftMarkets: ["Jackson", "Gulfport", "Biloxi"],
    annualLyftAccidents: 380,
    uniqueFacts: ["Gulf Coast casinos drive Lyft demand", "Pure comparative negligence is favorable for victims", "Limited service outside metro areas"]
  },
  {
    name: "Missouri",
    abbr: "MO",
    slug: "missouri",
    statOfLimitations: "5 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["5-year statute of limitations", "Kansas City spans state line", "St. Louis has high Lyft density"],
    majorLyftMarkets: ["St. Louis", "Kansas City", "Springfield", "Columbia"],
    annualLyftAccidents: 2400,
    uniqueFacts: ["5-year statute is second longest in US", "Pure comparative negligence favors victims", "Two major metro areas drive Lyft demand"]
  },
  {
    name: "Montana",
    abbr: "MT",
    slug: "montana",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 390 established early regulations", "Very limited service outside cities", "Tourism creates seasonal demand"],
    majorLyftMarkets: ["Billings", "Missoula", "Great Falls", "Bozeman"],
    annualLyftAccidents: 120,
    uniqueFacts: ["Ski resort areas have seasonal Lyft spikes", "Glacier National Park tourism drives demand", "Very limited rural coverage"]
  },
  {
    name: "Nebraska",
    abbr: "NE",
    slug: "nebraska",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations", "College football creates surge demand"],
    majorLyftMarkets: ["Omaha", "Lincoln"],
    annualLyftAccidents: 480,
    uniqueFacts: ["Nebraska football games create massive Lyft surges", "4-year statute is favorable for victims", "Omaha is growing market"]
  },
  {
    name: "Nevada",
    abbr: "NV",
    slug: "nevada",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Las Vegas is one of top Lyft markets globally", "McCarran Airport has massive Lyft volume", "24/7 demand from casinos and entertainment"],
    majorLyftMarkets: ["Las Vegas", "Reno", "Henderson", "North Las Vegas"],
    annualLyftAccidents: 6500,
    uniqueFacts: ["Las Vegas has highest Lyft usage per capita in US", "24/7 casino and entertainment demand", "Conventions and tourism drive massive volume", "McCarran Airport is one of busiest for Lyft pickups"]
  },
  {
    name: "New Hampshire",
    abbr: "NH",
    slug: "new-hampshire",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 302 established TNC rules", "Limited service outside southern NH"],
    majorLyftMarkets: ["Manchester", "Nashua", "Concord"],
    annualLyftAccidents: 220,
    uniqueFacts: ["Boston commuter demand drives southern NH usage", "Ski season creates winter surges", "Limited rural coverage"]
  },
  {
    name: "New Jersey",
    abbr: "NJ",
    slug: "new-jersey",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["A3695 established TNC framework", "No-fault PIP insurance", "NYC commuter traffic creates high demand", "Newark Airport has designated Lyft areas"],
    majorLyftMarkets: ["Newark", "Jersey City", "Paterson", "Trenton", "Hoboken"],
    annualLyftAccidents: 5200,
    uniqueFacts: ["NYC commuter demand drives massive Lyft usage", "No-fault insurance adds claim complexity", "One of most densely populated states"]
  },
  {
    name: "New Mexico",
    abbr: "NM",
    slug: "new-mexico",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 168 established TNC rules", "Limited coverage outside Albuquerque and Santa Fe"],
    majorLyftMarkets: ["Albuquerque", "Santa Fe", "Las Cruces"],
    annualLyftAccidents: 580,
    uniqueFacts: ["Tourism to Santa Fe drives Lyft demand", "Pure comparative negligence favors victims", "Limited rural coverage"]
  },
  {
    name: "New York",
    abbr: "NY",
    slug: "new-york",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$75,000 per person / $150,000 per accident",
      enRoute: "$1,250,000 liability coverage"
    },
    uniqueLaws: ["NYC has highest insurance requirements in nation", "TLC regulates NYC Lyft separately", "No-fault PIP insurance", "Congestion pricing affects Lyft costs"],
    majorLyftMarkets: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    annualLyftAccidents: 22000,
    uniqueFacts: ["NYC is largest Lyft market in the world", "Highest insurance requirements in US ($1.25M)", "TLC adds extra regulatory layer in NYC", "No-fault insurance complicates claims"]
  },
  {
    name: "North Carolina",
    abbr: "NC",
    slug: "north-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence is harsh barrier", "HB 389 established TNC rules", "Charlotte is major banking center with high business Lyft"],
    majorLyftMarkets: ["Charlotte", "Raleigh", "Durham", "Greensboro", "Wilmington"],
    annualLyftAccidents: 3800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "Research Triangle has high tech worker Lyft usage", "Charlotte banking district drives business demand"]
  },
  {
    name: "North Dakota",
    abbr: "ND",
    slug: "north-dakota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault insurance", "Very limited coverage outside cities"],
    majorLyftMarkets: ["Fargo", "Bismarck", "Grand Forks"],
    annualLyftAccidents: 95,
    uniqueFacts: ["6-year statute is most favorable for victims", "Oil boom areas had temporary Lyft surges", "Very limited service statewide"]
  },
  {
    name: "Ohio",
    abbr: "OH",
    slug: "ohio",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 237 established comprehensive TNC rules", "Multiple major metros with high Lyft density"],
    majorLyftMarkets: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    annualLyftAccidents: 4200,
    uniqueFacts: ["Columbus is one of fastest-growing Lyft markets", "Ohio State football creates massive surges", "Multiple metro areas each have strong Lyft presence"]
  },
  {
    name: "Oklahoma",
    abbr: "OK",
    slug: "oklahoma",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 316 established TNC framework", "Oklahoma City and Tulsa are primary markets"],
    majorLyftMarkets: ["Oklahoma City", "Tulsa", "Norman"],
    annualLyftAccidents: 920,
    uniqueFacts: ["University of Oklahoma games drive Norma Lyft spikes", "Oil industry workers use Lyft frequently", "Limited rural coverage"]
  },
  {
    name: "Oregon",
    abbr: "OR",
    slug: "oregon",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 2995 established TNC rules", "Portland has very high Lyft usage", "Strong bicycle culture creates interaction risks"],
    majorLyftMarkets: ["Portland", "Eugene", "Salem", "Bend"],
    annualLyftAccidents: 2100,
    uniqueFacts: ["Portland is one of most Lyft-friendly cities", "Strong public transit integration", "Bicycle and Lyft conflicts are common"]
  },
  {
    name: "Pennsylvania",
    abbr: "PA",
    slug: "pennsylvania",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 164 established comprehensive TNC rules", "Philadelphia has high Lyft density", "PHL Airport has designated pickup zones", "No-fault insurance option"],
    majorLyftMarkets: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"],
    annualLyftAccidents: 5800,
    uniqueFacts: ["Philadelphia is major East Coast Lyft market", "Pittsburgh has autonomous vehicle testing", "No-fault insurance can simplify claims"]
  },
  {
    name: "Rhode Island",
    abbr: "RI",
    slug: "rhode-island",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated Lyft", "Providence is primary market"],
    majorLyftMarkets: ["Providence", "Warwick", "Newport"],
    annualLyftAccidents: 340,
    uniqueFacts: ["Smallest state but high Lyft per capita", "Pure comparative negligence favors victims", "Boston proximity increases demand"]
  },
  {
    name: "South Carolina",
    abbr: "SC",
    slug: "south-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["H 3525 established early TNC rules", "Charleston tourism drives demand", "Myrtle Beach has seasonal surges"],
    majorLyftMarkets: ["Charleston", "Columbia", "Greenville", "Myrtle Beach"],
    annualLyftAccidents: 1650,
    uniqueFacts: ["Charleston and Myrtle Beach tourism creates high seasonal demand", "Early adopter of Lyft regulations", "College towns have strong usage"]
  },
  {
    name: "South Dakota",
    abbr: "SD",
    slug: "south-dakota",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (slight)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 28 established TNC rules", "Very limited coverage statewide", "Sturgis Rally creates massive annual surge"],
    majorLyftMarkets: ["Sioux Falls", "Rapid City"],
    annualLyftAccidents: 85,
    uniqueFacts: ["Sturgis Motorcycle Rally creates one of biggest annual Lyft surges", "Very limited year-round service", "Tourism to Mount Rushmore drives Rapid City demand"]
  },
  {
    name: "Tennessee",
    abbr: "TN",
    slug: "tennessee",
    statOfLimitations: "1 year",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - same as Louisiana", "Nashville has extremely high Lyft usage", "Music industry drives 24/7 demand"],
    majorLyftMarkets: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    annualLyftAccidents: 3200,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Nashville is one of top bachelorette party destinations - massive Lyft demand", "Memphis and Nashville both have vibrant nightlife driving 24/7 usage"]
  },
  {
    name: "Texas",
    abbr: "TX",
    slug: "texas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/25",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 100 established statewide rules", "Austin was early Lyft battleground", "Multiple major metros with high density", "Higher insurance minimums than many states"],
    majorLyftMarkets: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso"],
    annualLyftAccidents: 14000,
    uniqueFacts: ["Second largest Lyft market after California", "Austin had famous Uber/Lyft departure and return", "Houston and Dallas are among largest US markets", "SXSW creates massive annual Austin surge"]
  },
  {
    name: "Utah",
    abbr: "UT",
    slug: "utah",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/65/15",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 389 established early regulations", "Salt Lake City is growing tech hub", "Ski resorts drive seasonal demand"],
    majorLyftMarkets: ["Salt Lake City", "Provo", "Park City", "Ogden"],
    annualLyftAccidents: 1200,
    uniqueFacts: ["4-year statute of limitations is favorable", "Ski season creates massive Park City demand", "Tech industry growth driving Salt Lake Lyft boom"]
  },
  {
    name: "Vermont",
    abbr: "VT",
    slug: "vermont",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 60 established TNC rules", "Very limited coverage outside Burlington"],
    majorLyftMarkets: ["Burlington", "Montpelier"],
    annualLyftAccidents: 75,
    uniqueFacts: ["Smallest Lyft market in US", "Ski season creates seasonal surges", "Burlington has majority of service"]
  },
  {
    name: "Virginia",
    abbr: "VA",
    slug: "virginia",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/20",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes recovery extremely difficult", "DC metro area extends into VA", "Dulles and Reagan airports have high Lyft volume"],
    majorLyftMarkets: ["Virginia Beach", "Norfolk", "Richmond", "Arlington", "Alexandria"],
    annualLyftAccidents: 3400,
    uniqueFacts: ["Contributory negligence is major barrier to claims", "DC commuters create massive Northern Virginia demand", "Beach tourism drives Virginia Beach usage"]
  },
  {
    name: "Washington",
    abbr: "WA",
    slug: "washington",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 5550 established TNC framework", "Seattle has very high Lyft usage", "Sea-Tac Airport is major Lyft hub"],
    majorLyftMarkets: ["Seattle", "Tacoma", "Spokane", "Bellevue"],
    annualLyftAccidents: 4800,
    uniqueFacts: ["Seattle is one of top 10 Lyft markets in US", "Tech industry drives high Lyft adoption", "Pure comparative negligence favors victims"]
  },
  {
    name: "West Virginia",
    abbr: "WV",
    slug: "west-virginia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    lyftRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 539 established TNC rules", "Very limited coverage outside Charleston and Morgantown"],
    majorLyftMarkets: ["Charleston", "Morgantown", "Huntington"],
    annualLyftAccidents: 180,
    uniqueFacts: ["WVU campus drives Morgantown Lyft demand", "Very limited rural coverage", "Mountain terrain creates unique driving hazards"]
  },
  {
    name: "Wisconsin",
    abbr: "WI",
    slug: "wisconsin",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    lyftRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 278 established TNC framework", "Packers games create Green Bay surges", "Madison is major college market"],
    majorLyftMarkets: ["Milwaukee", "Madison", "Green Bay"],
    annualLyftAccidents: 1450,
    uniqueFacts: ["Packers football creates massive Green Bay surge demand", "UW-Madison campus has high student Lyft usage", "Winter weather affects year-round safety"]
  },
  {
    name: "Wyoming",
    abbr: "WY",
    slug: "wyoming",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/20",
    lyftRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    lyftInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Very limited coverage statewide", "Tourism to Yellowstone drives Jackson demand"],
    majorLyftMarkets: ["Cheyenne", "Casper", "Jackson"],
    annualLyftAccidents: 45,
    uniqueFacts: ["Smallest population state with very limited Lyft", "4-year statute of limitations is favorable", "Jackson Hole tourism creates seasonal spikes"]
  }
];

export function getStateBySlug(slug: string): State | undefined {
  return states.find(s => s.slug === slug);
}

export function getContributoryNegligenceStates(): State[] {
  return states.filter(s => s.faultSystem.toLowerCase().includes('contributory'));
}

export function getOneYearSOLStates(): State[] {
  return states.filter(s => s.statOfLimitations === '1 year');
}

export function getLongSOLStates(): State[] {
  return states.filter(s => {
    const years = parseInt(s.statOfLimitations);
    return years >= 4;
  });
}

export function getTopLyftMarkets(): State[] {
  return states.filter(s => s.annualLyftAccidents >= 5000).sort((a, b) => b.annualLyftAccidents - a.annualLyftAccidents);
}
