module.exports = {
  user: {
    username: 'initialize',
    password: 'initialize'
  },
  tags: [
    // Required for opportunity defaults
    {
      type: 'task-time-required',
      name: 'Part Time'
    },
    {
      type: 'task-time-required',
      name: 'Full Time'
    },
    {
      type: 'task-time-required',
      name: '20% Time'
    },
    // ------------
    {
      type: 'task-people',
      name: '1 person'
    },
    {
      type: 'task-people',
      name: '2 - 5 people'
    },
    {
      type: 'task-people',
      name: '> 5 people'
    },
    {
      type: 'task-people',
      name: 'A Team'
    },
    // ------------
    {
      type: 'task-skills-required',
      name: 'Required'
    },
    {
      type: 'task-skills-required',
      name: 'Not Required'
    },
    // ------------
    {
      type: 'task-length',
      name: '1 Day'
    },
    {
      type: 'task-length',
      name: '1 - 3 Days'
    },
    {
      type: 'task-length',
      name: '1 Week'
    },
    {
      type: 'task-length',
      name: '1 Month'
    },
    {
      type: 'task-length',
      name: 'A Few Months'
    },
    // -------------
    {
      type: 'task-time-estimate',
      name: 'Less than 1 hour'
    },
    {
      type: 'task-time-estimate',
      name: '1 - 3 hours'
    },
    {
      type: 'task-time-estimate',
      name: '4 - 8 hours'
    },
    {
      type: 'task-time-estimate',
      name: '9 - 24 hours'
    },
    {
      type: 'task-time-estimate',
      name: '25 - 40 hours'
    },
    {
      type: 'task-time-estimate',
      name: 'longer than 40 hours'
    },
    // LOCATIONS; as per CrowdWork requirements
    {
      type: 'location',
      name: 'Benin'
    },
    {
      type: 'location',
      name: 'Turks and Caicos Islands'
    },
    {
      type: 'location',
      name: 'Monaco'
    },
    {
      type: 'location',
      name: 'Slovakia'
    },
    {
      type: 'location',
      name: 'Botswana'
    },
    {
      type: 'location',
      name: 'Togo'
    },
    {
      type: 'location',
      name: 'Romania'
    },
    {
      type: 'location',
      name: 'Nicaragua'
    },
    {
      type: 'location',
      name: 'Switzerland'
    },
    {
      type: 'location',
      name: 'Turkey'
    },
    {
      type: 'location',
      name: 'Israel'
    },
    {
      type: 'location',
      name: 'Australia'
    },
    {
      type: 'location',
      name: 'Sierra Leone'
    },
    {
      type: 'location',
      name: 'Tuvalu'
    },
    {
      type: 'location',
      name: 'Solomon Islands'
    },
    {
      type: 'location',
      name: 'Indonesia'
    },
    {
      type: 'location',
      name: 'Bolivia'
    },
    {
      type: 'location',
      name: 'Kenya'
    },
    {
      type: 'location',
      name: 'Norway'
    },
    {
      type: 'location',
      name: 'Canada'
    },
    {
      type: 'location',
      name: 'Kiribati'
    },
    {
      type: 'location',
      name: 'Macau'
    },
    {
      type: 'location',
      name: 'Serbia'
    },
    {
      type: 'location',
      name: 'Saudi Arabia'
    },
    {
      type: 'location',
      name: 'China'
    },
    {
      type: 'location',
      name: 'French Guiana'
    },
    {
      type: 'location',
      name: 'Hungary'
    },
    {
      type: 'location',
      name: 'Latvia'
    },
    {
      type: 'location',
      name: 'Ireland'
    },
    {
      type: 'location',
      name: 'Guyana'
    },
    {
      type: 'location',
      name: 'Somalia'
    },
    {
      type: 'location',
      name: 'India'
    },
    {
      type: 'location',
      name: 'Panama'
    },
    {
      type: 'location',
      name: 'Northern Mariana Islands'
    },
    {
      type: 'location',
      name: 'Bulgaria'
    },
    {
      type: 'location',
      name: 'Malta'
    },
    {
      type: 'location',
      name: 'Lithuania'
    },
    {
      type: 'location',
      name: 'Spain'
    },
    {
      type: 'location',
      name: 'Netherlands'
    },
    {
      type: 'location',
      name: 'Albania'
    },
    {
      type: 'location',
      name: 'Moldova'
    },
    {
      type: 'location',
      name: 'Burkina Faso'
    },
    {
      type: 'location',
      name: 'Cabo Verde'
    },
    {
      type: 'location',
      name: 'Bosnia and Herzegovina'
    },
    {
      type: 'location',
      name: 'Sao Tome and Principe'
    },
    {
      type: 'location',
      name: 'Austria'
    },
    {
      type: 'location',
      name: 'Belize'
    },
    {
      type: 'location',
      name: 'Barbados'
    },
    {
      type: 'location',
      name: 'Portugal'
    },
    {
      type: 'location',
      name: 'Morocco'
    },
    {
      type: 'location',
      name: 'El Salvador'
    },
    {
      type: 'location',
      name: 'Argentina'
    },
    {
      type: 'location',
      name: 'Chad'
    },
    {
      type: 'location',
      name: 'Tunisia'
    },
    {
      type: 'location',
      name: 'Brazil'
    },
    {
      type: 'location',
      name: 'Philippines'
    },
    {
      type: 'location',
      name: 'Vanuatu'
    },
    {
      type: 'location',
      name: 'Liechtenstein'
    },
    {
      type: 'location',
      name: 'Suriname'
    },
    {
      type: 'location',
      name: 'Paraguay'
    },
    {
      type: 'location',
      name: 'Liberia'
    },
    {
      type: 'location',
      name: 'Montenegro'
    },
    {
      type: 'location',
      name: 'France'
    },
    {
      type: 'location',
      name: 'Comoros'
    },
    {
      type: 'location',
      name: 'Venezuela'
    },
    {
      type: 'location',
      name: 'Chile'
    },
    {
      type: 'location',
      name: 'Russia'
    },
    {
      type: 'location',
      name: 'Mauritius'
    },
    {
      type: 'location',
      name: 'Curacao'
    },
    {
      type: 'location',
      name: 'Martinique'
    },
    {
      type: 'location',
      name: 'Trinidad and Tobago'
    },
    {
      type: 'location',
      name: 'Yemen'
    },
    {
      type: 'location',
      name: 'Taiwan'
    },
    {
      type: 'location',
      name: 'Pakistan'
    },
    {
      type: 'location',
      name: 'Mexico'
    },
    {
      type: 'location',
      name: 'Belarus'
    },
    {
      type: 'location',
      name: 'Mauritania'
    },
    {
      type: 'location',
      name: 'Ecuador'
    },
    {
      type: 'location',
      name: 'Honduras'
    },
    {
      type: 'location',
      name: 'Mongolia'
    },
    {
      type: 'location',
      name: 'Guatemala'
    },
    {
      type: 'location',
      name: 'Niger'
    },
    {
      type: 'location',
      name: 'Colombia'
    },
    {
      type: 'location',
      name: 'Eritrea'
    },
    {
      type: 'location',
      name: 'Guinea-Bissau'
    },
    {
      type: 'location',
      name: 'Guinea'
    },
    {
      type: 'location',
      name: 'Bahamas, The'
    },
    {
      type: 'location',
      name: 'Burundi'
    },
    {
      type: 'location',
      name: 'Congo (Kinshasa)'
    },
    {
      type: 'location',
      name: 'Madagascar'
    },
    {
      type: 'location',
      name: 'Uzbekistan'
    },
    {
      type: 'location',
      name: 'Mali'
    },
    {
      type: 'location',
      name: 'Tonga'
    },
    {
      type: 'location',
      name: 'Nigeria'
    },
    {
      type: 'location',
      name: 'Afghanistan'
    },
    {
      type: 'location',
      name: 'Papua New Guinea'
    },
    {
      type: 'location',
      name: 'Cuba'
    },
    {
      type: 'location',
      name: 'Haiti'
    },
    {
      type: 'location',
      name: 'Tanzania'
    },
    {
      type: 'location',
      name: 'Georgia'
    },
    {
      type: 'location',
      name: 'Gambia, The'
    },
    {
      type: 'location',
      name: 'Angola'
    },
    {
      type: 'location',
      name: 'South Sudan'
    },
    {
      type: 'location',
      name: 'Kosovo'
    },
    {
      type: 'location',
      name: 'American Samoa'
    },
    {
      type: 'location',
      name: 'Gabon'
    },
    {
      type: 'location',
      name: 'Swaziland'
    },
    {
      type: 'location',
      name: 'Bangladesh'
    },
    {
      type: 'location',
      name: 'Burma'
    },
    {
      type: 'location',
      name: 'Jordan'
    },
    {
      type: 'location',
      name: 'Dominican Republic'
    },
    {
      type: 'location',
      name: 'Croatia'
    },
    {
      type: 'location',
      name: 'Ukraine'
    },
    {
      type: 'location',
      name: 'Lebanon'
    },
    {
      type: 'location',
      name: 'Lesotho'
    },
    {
      type: 'location',
      name: 'Qatar'
    },
    {
      type: 'location',
      name: 'Italy'
    },
    {
      type: 'location',
      name: 'Syria'
    },
    {
      type: 'location',
      name: 'Macedonia'
    },
    {
      type: 'location',
      name: 'United Arab Emirates'
    },
    {
      type: 'location',
      name: 'Djibouti'
    },
    {
      type: 'location',
      name: 'United Kingdom'
    },
    {
      type: 'location',
      name: 'Zambia'
    },
    {
      type: 'location',
      name: 'Luxembourg'
    },
    {
      type: 'location',
      name: 'Armenia'
    },
    {
      type: 'location',
      name: 'Korea, South'
    },
    {
      type: 'location',
      name: 'Central African Republic'
    },
    {
      type: 'location',
      name: 'Maldives'
    },
    {
      type: 'location',
      name: 'Ethiopia'
    },
    {
      type: 'location',
      name: 'Congo (Brazzaville)'
    },
    {
      type: 'location',
      name: 'Senegal'
    },
    {
      type: 'location',
      name: 'Malawi'
    },
    {
      type: 'location',
      name: 'Ghana'
    },
    {
      type: 'location',
      name: 'Kuwait'
    },
    {
      type: 'location',
      name: 'Cameroon'
    },
    {
      type: 'location',
      name: 'Bhutan'
    },
    {
      type: 'location',
      name: 'Falkland Islands (Islas Malvinas)'
    },
    {
      type: 'location',
      name: 'Saint Lucia'
    },
    {
      type: 'location',
      name: 'Nauru'
    },
    {
      type: 'location',
      name: 'Sweden'
    },
    {
      type: 'location',
      name: 'Laos'
    },
    {
      type: 'location',
      name: 'Slovenia'
    },
    {
      type: 'location',
      name: 'Costa Rica'
    },
    {
      type: 'location',
      name: 'Poland'
    },
    {
      type: 'location',
      name: 'Azerbaijan'
    },
    {
      type: 'location',
      name: 'Belgium'
    },
    {
      type: 'location',
      name: 'New Zealand'
    },
    {
      type: 'location',
      name: 'Mozambique'
    },
    {
      type: 'location',
      name: 'Samoa'
    },
    {
      type: 'location',
      name: 'Thailand'
    },
    {
      type: 'location',
      name: 'Rwanda'
    },
    {
      type: 'location',
      name: 'Malaysia'
    },
    {
      type: 'location',
      name: 'Zimbabwe'
    },
    {
      type: 'location',
      name: 'French Polynesia'
    },
    {
      type: 'location',
      name: 'Iran'
    },
    {
      type: 'location',
      name: 'Brunei'
    },
    {
      type: 'location',
      name: 'Libya'
    },
    {
      type: 'location',
      name: 'Vatican City'
    },
    {
      type: 'location',
      name: 'Niue'
    },
    {
      type: 'location',
      name: 'Jamaica'
    },
    {
      type: 'location',
      name: 'Oman'
    },
    {
      type: 'location',
      name: 'Iceland'
    },
    {
      type: 'location',
      name: 'Estonia'
    },
    {
      type: 'location',
      name: 'New Caledonia'
    },
    {
      type: 'location',
      name: 'Kyrgyzstan'
    },
    {
      type: 'location',
      name: 'Bahrain'
    },
    {
      type: 'location',
      name: 'Cambodia'
    },
    {
      type: 'location',
      name: 'Sri Lanka'
    },
    {
      type: 'location',
      name: 'Tajikistan'
    },
    {
      type: 'location',
      name: 'Turkmenistan'
    },
    {
      type: 'location',
      name: 'United States'
    },
    {
      type: 'location',
      name: 'Timor-Leste'
    },
    {
      type: 'location',
      name: 'Equatorial Guinea'
    },
    {
      type: 'location',
      name: 'Czech Republic'
    },
    {
      type: 'location',
      name: 'Algeria'
    },
    {
      type: 'location',
      name: 'Egypt'
    },
    {
      type: 'location',
      name: 'Iraq'
    },
    {
      type: 'location',
      name: 'Cyprus'
    },
    {
      type: 'location',
      name: 'Kazakhstan'
    },
    {
      type: 'location',
      name: 'Uruguay'
    },
    {
      type: 'location',
      name: 'Namibia'
    },
    {
      type: 'location',
      name: 'Seychelles'
    },
    {
      type: 'location',
      name: 'Greece'
    },
    {
      type: 'location',
      name: 'Sudan'
    },
    {
      type: 'location',
      name: 'Grenada'
    },
    {
      type: 'location',
      name: 'South Africa'
    },
    {
      type: 'location',
      name: 'Denmark'
    },
    {
      type: 'location',
      name: 'Singapore'
    },
    {
      type: 'location',
      name: 'Bermuda'
    },
    {
      type: 'location',
      name: 'Vietnam'
    },
    {
      type: 'location',
      name: 'Finland'
    },
    {
      type: 'location',
      name: 'Uganda'
    },
    {
      type: 'location',
      name: 'Nepal'
    },
    {
      type: 'location',
      name: 'Peru'
    },
    {
      type: 'location',
      name: 'Marshall Islands'
    },
    {
      type: 'location',
      name: 'Antigua and Barbuda'
    },
    {
      type: 'location',
      name: 'Fiji'
    },
    {
      type: 'location',
      name: 'Japan'
    },
    {
      type: 'location',
      name: 'Germany'
    },
    {
      type: 'location',
      name: 'Aruba'
    },
    {
      type: 'location',
      name: 'Korea, North'
    },
    {
      type: 'location',
      name: 'Dominica'
    },
    {
      type: 'location',
      name: 'Montserrat'
    },
    {
      type: 'location',
      name: 'Wallis and Futuna'
    },
    {
      type: 'location',
      name: 'Palau'
    },
    {
      type: 'location',
      name: 'Sint Maarten'
    },
    {
      type: 'location',
      name: 'British Virgin Islands'
    },
    {
      type: 'location',
      name: 'Jersey'
    },
    {
      type: 'location',
      name: 'Guernsey'
    },
    {
      type: 'location',
      name: 'Saint Pierre and Miquelon'
    },
    {
      type: 'location',
      name: 'Christmas Island'
    },
    {
      type: 'location',
      name: 'Anguilla'
    },
    {
      type: 'location',
      name: 'Faroe Islands'
    },
    {
      type: 'location',
      name: 'Andorra'
    },
    {
      type: 'location',
      name: 'Greenland'
    },
    {
      type: 'location',
      name: 'Cote d\'Ivoire'
    },
    {
      type: 'location',
      name: 'Pitcairn Islands'
    },
    {
      type: 'location',
      name: 'Cook Islands'
    },
    {
      type: 'location',
      name: 'Saint Barthelemy'
    },
    {
      type: 'location',
      name: 'Svalbard'
    },
    {
      type: 'location',
      name: 'Saint Martin'
    },
    {
      type: 'location',
      name: 'Guam'
    },
    {
      type: 'location',
      name: 'U.S. Virgin Islands'
    },
    {
      type: 'location',
      name: 'Mayotte'
    },
    {
      type: 'location',
      name: 'Reunion'
    },
    {
      type: 'location',
      name: 'Isle of Man'
    },
    {
      type: 'location',
      name: 'Cocos (Keeling) Islands'
    },
    {
      type: 'location',
      name: 'Norfolk Island'
    },
    {
      type: 'location',
      name: 'Dhekelia'
    },
    {
      type: 'location',
      name: 'Akrotiri'
    },
    {
      type: 'location',
      name: 'Cayman Islands'
    },
    {
      type: 'location',
      name: 'Gibraltar'
    },
    {
      type: 'location',
      name: 'Micronesia, Federated States of'
    },
    {
      type: 'location',
      name: 'Saint Helena, Ascension, and Tristan da Cunha'
    },
    {
      type: 'location',
      name: 'Puerto Rico'
    },
    {
      type: 'location',
      name: 'San Marino'
    },
    {
      type: 'location',
      name: 'Saint Kitts and Nevis'
    },
    {
      type: 'location',
      name: 'Guadeloupe'
    },
    {
      type: 'location',
      name: 'Saint Vincent and the Grenadines'
    },
    {
      type: 'location',
      name: 'Howland Island'
    },
    {
      type: 'location',
      name: 'Jarvis Island'
    },
    {
      type: 'location',
      name: 'Johnston Atoll'
    },
    {
      type: 'location',
      name: 'Kingman Reef'
    },
    {
      type: 'location',
      name: 'Midway Islands'
    },
    {
      type: 'location',
      name: 'Navassa Island'
    },
    {
      type: 'location',
      name: 'Palmyra Atoll'
    },
    {
      type: 'location',
      name: 'Wake Island'
    },
    {
      type: 'location',
      name: 'Baker Island'
    },
    {
      type: 'location',
      name: 'Antarctica'
    },
    {
      type: 'location',
      name: 'Juan de Nova Island'
    },
    {
      type: 'location',
      name: 'Tromelin Island'
    },
    {
      type: 'location',
      name: 'Bouvet Island'
    },
    {
      type: 'location',
      name: 'Western Sahara'
    },
    {
      type: 'location',
      name: 'Europa Island'
    },
    {
      type: 'location',
      name: 'French Southern and Antarctic Lands'
    },
    {
      type: 'location',
      name: 'Glorioso Islands'
    },
    {
      type: 'location',
      name: 'Heard Island and McDonald Islands'
    },
    {
      type: 'location',
      name: 'Bassas da India'
    },
    {
      type: 'location',
      name: 'British Indian Ocean Territory'
    },
    {
      type: 'location',
      name: 'Gaza Strip'
    },
    {
      type: 'location',
      name: 'West Bank'
    },
    {
      type: 'location',
      name: 'Coral Sea Islands'
    },
    {
      type: 'location',
      name: 'Hong Kong'
    },
    {
      type: 'location',
      name: 'Paracel Islands'
    },
    {
      type: 'location',
      name: 'Spratly Islands'
    },
    {
      type: 'location',
      name: 'Tokelau'
    },
    {
      type: 'location',
      name: 'Ashmore and Cartier Islands'
    },
    {
      type: 'location',
      name: 'Clipperton Island'
    },
    {
      type: 'location',
      name: 'Jan Mayen'
    },
    {
      type: 'location',
      name: 'Netherlands Antilles'
    },
    {
      type: 'location',
      name: 'South Georgia and the South Sandwich Islands'
    },
    {
      type: 'location',
      name: 'Bonaire, Sint Eustatius and Saba'
    },
    {
      type: 'location',
      name: 'Porto-Novo'
    },
    {
      type: 'location',
      name: 'Grand Turk'
    },
    {
      type: 'location',
      name: 'Monaco'
    },
    {
      type: 'location',
      name: 'Bratislava'
    },
    {
      type: 'location',
      name: 'Gaborone'
    },
    {
      type: 'location',
      name: 'Lome'
    },
    {
      type: 'location',
      name: 'Bucharest'
    },
    {
      type: 'location',
      name: 'Managua'
    },
    {
      type: 'location',
      name: 'Bern'
    },
    {
      type: 'location',
      name: 'Ankara'
    },
    {
      type: 'location',
      name: 'Jerusalem'
    },
    {
      type: 'location',
      name: 'Canberra'
    },
    {
      type: 'location',
      name: 'Freetown'
    },
    {
      type: 'location',
      name: 'Funafuti'
    },
    {
      type: 'location',
      name: 'Honiara'
    },
    {
      type: 'location',
      name: 'Jakarta'
    },
    {
      type: 'location',
      name: 'La Paz'
    },
    {
      type: 'location',
      name: 'Nairobi'
    },
    {
      type: 'location',
      name: 'Oslo'
    },
    {
      type: 'location',
      name: 'Ottawa'
    },
    {
      type: 'location',
      name: 'Tarawa'
    },
    {
      type: 'location',
      name: 'Macau'
    },
    {
      type: 'location',
      name: 'Belgrade'
    },
    {
      type: 'location',
      name: 'Riyadh'
    },
    {
      type: 'location',
      name: 'Beijing'
    },
    {
      type: 'location',
      name: 'Cayenne'
    },
    {
      type: 'location',
      name: 'Budapest'
    },
    {
      type: 'location',
      name: 'Riga'
    },
    {
      type: 'location',
      name: 'Dublin'
    },
    {
      type: 'location',
      name: 'Georgetown'
    },
    {
      type: 'location',
      name: 'Mogadishu'
    },
    {
      type: 'location',
      name: 'New Delhi'
    },
    {
      type: 'location',
      name: 'Panama City'
    },
    {
      type: 'location',
      name: 'Saipan'
    },
    {
      type: 'location',
      name: 'Sofia'
    },
    {
      type: 'location',
      name: 'Valletta'
    },
    {
      type: 'location',
      name: 'Vilnius'
    },
    {
      type: 'location',
      name: 'Madrid'
    },
    {
      type: 'location',
      name: 'Amsterdam'
    },
    {
      type: 'location',
      name: 'Tirana'
    },
    {
      type: 'location',
      name: 'Chisinau'
    },
    {
      type: 'location',
      name: 'Ouagadougou'
    },
    {
      type: 'location',
      name: 'Praia'
    },
    {
      type: 'location',
      name: 'Sarajevo'
    },
    {
      type: 'location',
      name: 'Sao Tome'
    },
    {
      type: 'location',
      name: 'Vienna'
    },
    {
      type: 'location',
      name: 'Belmopan'
    },
    {
      type: 'location',
      name: 'Bridgetown'
    },
    {
      type: 'location',
      name: 'Lisbon'
    },
    {
      type: 'location',
      name: 'Rabat'
    },
    {
      type: 'location',
      name: 'San Salvador'
    },
    {
      type: 'location',
      name: 'Buenos Aires'
    },
    {
      type: 'location',
      name: 'N\'Djamena'
    },
    {
      type: 'location',
      name: 'Tunis'
    },
    {
      type: 'location',
      name: 'Brasilia'
    },
    {
      type: 'location',
      name: 'Manila'
    },
    {
      type: 'location',
      name: 'Port-Vila'
    },
    {
      type: 'location',
      name: 'Vaduz'
    },
    {
      type: 'location',
      name: 'Paramaribo'
    },
    {
      type: 'location',
      name: 'Asuncion'
    },
    {
      type: 'location',
      name: 'Monrovia'
    },
    {
      type: 'location',
      name: 'Podgorica'
    },
    {
      type: 'location',
      name: 'Paris'
    },
    {
      type: 'location',
      name: 'Moroni'
    },
    {
      type: 'location',
      name: 'Caracas'
    },
    {
      type: 'location',
      name: 'Santiago'
    },
    {
      type: 'location',
      name: 'Moscow'
    },
    {
      type: 'location',
      name: 'Port Louis'
    },
    {
      type: 'location',
      name: 'Willemstad'
    },
    {
      type: 'location',
      name: 'Fort-de-France'
    },
    {
      type: 'location',
      name: 'Port of Spain'
    },
    {
      type: 'location',
      name: 'Sanaa'
    },
    {
      type: 'location',
      name: 'Taipei'
    },
    {
      type: 'location',
      name: 'Islamabad'
    },
    {
      type: 'location',
      name: 'Mexico City'
    },
    {
      type: 'location',
      name: 'Minsk'
    },
    {
      type: 'location',
      name: 'Nouakchott'
    },
    {
      type: 'location',
      name: 'Quito'
    },
    {
      type: 'location',
      name: 'Tegucigalpa'
    },
    {
      type: 'location',
      name: 'Ulaanbaatar'
    },
    {
      type: 'location',
      name: 'Guatemala City'
    },
    {
      type: 'location',
      name: 'Niamey'
    },
    {
      type: 'location',
      name: 'Bogota'
    },
    {
      type: 'location',
      name: 'Asmara'
    },
    {
      type: 'location',
      name: 'Bissau'
    },
    {
      type: 'location',
      name: 'Conakry'
    },
    {
      type: 'location',
      name: 'Nassau'
    },
    {
      type: 'location',
      name: 'Bujumbura'
    },
    {
      type: 'location',
      name: 'Kinshasa'
    },
    {
      type: 'location',
      name: 'Antananarivo'
    },
    {
      type: 'location',
      name: 'Tashkent'
    },
    {
      type: 'location',
      name: 'Bamako'
    },
    {
      type: 'location',
      name: 'Nuku\'alofa'
    },
    {
      type: 'location',
      name: 'Abuja'
    },
    {
      type: 'location',
      name: 'Kabul'
    },
    {
      type: 'location',
      name: 'Port Moresby'
    },
    {
      type: 'location',
      name: 'Havana'
    },
    {
      type: 'location',
      name: 'Port-au-Prince'
    },
    {
      type: 'location',
      name: 'Dar es Salaam'
    },
    {
      type: 'location',
      name: 'Tbilisi'
    },
    {
      type: 'location',
      name: 'Banjul'
    },
    {
      type: 'location',
      name: 'Luanda'
    },
    {
      type: 'location',
      name: 'Juba'
    },
    {
      type: 'location',
      name: 'Pristina'
    },
    {
      type: 'location',
      name: 'Pago Pago'
    },
    {
      type: 'location',
      name: 'Libreville'
    },
    {
      type: 'location',
      name: 'Mbabane'
    },
    {
      type: 'location',
      name: 'Dhaka'
    },
    {
      type: 'location',
      name: 'Rangoon'
    },
    {
      type: 'location',
      name: 'Amman'
    },
    {
      type: 'location',
      name: 'Santo Domingo'
    },
    {
      type: 'location',
      name: 'Zagreb'
    },
    {
      type: 'location',
      name: 'Kyiv'
    },
    {
      type: 'location',
      name: 'Beirut'
    },
    {
      type: 'location',
      name: 'Maseru'
    },
    {
      type: 'location',
      name: 'Doha'
    },
    {
      type: 'location',
      name: 'Rome'
    },
    {
      type: 'location',
      name: 'Damascus'
    },
    {
      type: 'location',
      name: 'Skopje'
    },
    {
      type: 'location',
      name: 'Abu Dhabi'
    },
    {
      type: 'location',
      name: 'Djibouti'
    },
    {
      type: 'location',
      name: 'London'
    },
    {
      type: 'location',
      name: 'Lusaka'
    },
    {
      type: 'location',
      name: 'Luxembourg'
    },
    {
      type: 'location',
      name: 'Yerevan'
    },
    {
      type: 'location',
      name: 'Seoul'
    },
    {
      type: 'location',
      name: 'Bangui'
    },
    {
      type: 'location',
      name: 'Male'
    },
    {
      type: 'location',
      name: 'Addis Ababa'
    },
    {
      type: 'location',
      name: 'Brazzaville'
    },
    {
      type: 'location',
      name: 'Dakar'
    },
    {
      type: 'location',
      name: 'Lilongwe'
    },
    {
      type: 'location',
      name: 'Accra'
    },
    {
      type: 'location',
      name: 'Kuwait City'
    },
    {
      type: 'location',
      name: 'Yaounde'
    },
    {
      type: 'location',
      name: 'Thimphu'
    },
    {
      type: 'location',
      name: 'Stanley'
    },
    {
      type: 'location',
      name: 'Castries'
    },
    {
      type: 'location',
      name: 'Yaren District'
    },
    {
      type: 'location',
      name: 'Stockholm'
    },
    {
      type: 'location',
      name: 'Vientiane'
    },
    {
      type: 'location',
      name: 'Ljubljana'
    },
    {
      type: 'location',
      name: 'San Jose'
    },
    {
      type: 'location',
      name: 'Warsaw'
    },
    {
      type: 'location',
      name: 'Baku'
    },
    {
      type: 'location',
      name: 'Brussels'
    },
    {
      type: 'location',
      name: 'Wellington'
    },
    {
      type: 'location',
      name: 'Maputo'
    },
    {
      type: 'location',
      name: 'Apia'
    },
    {
      type: 'location',
      name: 'Bangkok'
    },
    {
      type: 'location',
      name: 'Kigali'
    },
    {
      type: 'location',
      name: 'Kuala Lumpur'
    },
    {
      type: 'location',
      name: 'Harare'
    },
    {
      type: 'location',
      name: 'Papeete'
    },
    {
      type: 'location',
      name: 'Tehran'
    },
    {
      type: 'location',
      name: 'Bandar Seri Begawan'
    },
    {
      type: 'location',
      name: 'Tripoli'
    },
    {
      type: 'location',
      name: 'Vatican City'
    },
    {
      type: 'location',
      name: 'Alofi'
    },
    {
      type: 'location',
      name: 'Kingston'
    },
    {
      type: 'location',
      name: 'Muscat'
    },
    {
      type: 'location',
      name: 'Reykjavik'
    },
    {
      type: 'location',
      name: 'Tallinn'
    },
    {
      type: 'location',
      name: 'Noumea'
    },
    {
      type: 'location',
      name: 'Bishkek'
    },
    {
      type: 'location',
      name: 'Manama'
    },
    {
      type: 'location',
      name: 'Phnom Penh'
    },
    {
      type: 'location',
      name: 'Colombo'
    },
    {
      type: 'location',
      name: 'Dushanbe'
    },
    {
      type: 'location',
      name: 'Ashgabat'
    },
    {
      type: 'location',
      name: 'Washington'
    },
    {
      type: 'location',
      name: 'Dili'
    },
    {
      type: 'location',
      name: 'Malabo'
    },
    {
      type: 'location',
      name: 'Prague'
    },
    {
      type: 'location',
      name: 'Algiers'
    },
    {
      type: 'location',
      name: 'Cairo'
    },
    {
      type: 'location',
      name: 'Baghdad'
    },
    {
      type: 'location',
      name: 'Nicosia'
    },
    {
      type: 'location',
      name: 'Astana'
    },
    {
      type: 'location',
      name: 'Montevideo'
    },
    {
      type: 'location',
      name: 'Windhoek'
    },
    {
      type: 'location',
      name: 'Victoria'
    },
    {
      type: 'location',
      name: 'Athens'
    },
    {
      type: 'location',
      name: 'Khartoum'
    },
    {
      type: 'location',
      name: 'Saint George\'s'
    },
    {
      type: 'location',
      name: 'Pretoria'
    },
    {
      type: 'location',
      name: 'Copenhagen'
    },
    {
      type: 'location',
      name: 'Singapore'
    },
    {
      type: 'location',
      name: 'Hamilton'
    },
    {
      type: 'location',
      name: 'Hanoi'
    },
    {
      type: 'location',
      name: 'Helsinki'
    },
    {
      type: 'location',
      name: 'Kampala'
    },
    {
      type: 'location',
      name: 'Kathmandu'
    },
    {
      type: 'location',
      name: 'Lima'
    },
    {
      type: 'location',
      name: 'Majuro'
    },
    {
      type: 'location',
      name: 'Saint Johns'
    },
    {
      type: 'location',
      name: 'Suva'
    },
    {
      type: 'location',
      name: 'Tokyo'
    },
    {
      type: 'location',
      name: 'Berlin'
    },
    {
      type: 'location',
      name: 'Oranjestad'
    },
    {
      type: 'location',
      name: 'Pyongyang'
    },
    {
      type: 'location',
      name: 'Roseau'
    },
    {
      type: 'location',
      name: 'Plymouth'
    },
    {
      type: 'location',
      name: 'Mata\'utu'
    },
    {
      type: 'location',
      name: 'Melekeok'
    },
    {
      type: 'location',
      name: 'Philipsburg'
    },
    {
      type: 'location',
      name: 'Road Town'
    },
    {
      type: 'location',
      name: 'Saint Helier'
    },
    {
      type: 'location',
      name: 'Saint Peter Port'
    },
    {
      type: 'location',
      name: 'Saint-Pierre'
    },
    {
      type: 'location',
      name: 'Flying Fish Cove'
    },
    {
      type: 'location',
      name: 'The Valley'
    },
    {
      type: 'location',
      name: 'Torshavn'
    },
    {
      type: 'location',
      name: 'Andorra la Vella'
    },
    {
      type: 'location',
      name: 'Nuuk'
    },
    {
      type: 'location',
      name: 'Yamoussoukro'
    },
    {
      type: 'location',
      name: 'Adamstown'
    },
    {
      type: 'location',
      name: 'Avarua'
    },
    {
      type: 'location',
      name: 'Gustavia'
    },
    {
      type: 'location',
      name: 'Longyearbyen'
    },
    {
      type: 'location',
      name: 'Marigot'
    },
    {
      type: 'location',
      name: 'Hagatna Heights'
    },
    {
      type: 'location',
      name: 'Charlotte Amalie'
    },
    {
      type: 'location',
      name: 'Mamoutzou'
    },
    {
      type: 'location',
      name: 'Saint-Denis'
    },
    {
      type: 'location',
      name: 'Douglas'
    },
    {
      type: 'location',
      name: 'West Island'
    },
    {
      type: 'location',
      name: 'Kingston'
    },
    {
      type: 'location',
      name: 'Episkopi'
    },
    {
      type: 'location',
      name: 'Episkopi'
    },
    {
      type: 'location',
      name: 'George Town'
    },
    {
      type: 'location',
      name: 'Gibraltar'
    },
    {
      type: 'location',
      name: 'Palikir'
    },
    {
      type: 'location',
      name: 'Jamestown'
    },
    {
      type: 'location',
      name: 'San Juan'
    },
    {
      type: 'location',
      name: 'San Marino'
    },
    {
      type: 'location',
      name: 'Basseterre'
    },
    {
      type: 'location',
      name: 'Basse-Terre'
    },
    {
      type: 'location',
      name: 'Kingstown'
    }    
  ]
};
