/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```


  const countriesList = [{
      name: 'Afghanistan',
      code: 'AF'
    },
    {
      name: 'Åland Islands',
      code: 'AX'
    },
    {
      name: 'Albania',
      code: 'AL'
    },
    {
      name: 'Algeria',
      code: 'DZ'
    },
    {
      name: 'American Samoa',
      code: 'AS'
    },
    {
      name: 'AndorrA',
      code: 'AD'
    },
    {
      name: 'Angola',
      code: 'AO'
    },
    {
      name: 'Anguilla',
      code: 'AI'
    },
    {
      name: 'Antarctica',
      code: 'AQ'
    },
    {
      name: 'Antigua and Barbuda',
      code: 'AG'
    },
    {
      name: 'Argentina',
      code: 'AR'
    },
    {
      name: 'Armenia',
      code: 'AM'
    },
    {
      name: 'Aruba',
      code: 'AW'
    },
    {
      name: 'Australia',
      code: 'AU'
    },
    {
      name: 'Austria',
      code: 'AT'
    },
    {
      name: 'Azerbaijan',
      code: 'AZ'
    },
    {
      name: 'Bahamas',
      code: 'BS'
    },
    {
      name: 'Bahrain',
      code: 'BH'
    },
    {
      name: 'Bangladesh',
      code: 'BD'
    },
    {
      name: 'Barbados',
      code: 'BB'
    },
    {
      name: 'Belarus',
      code: 'BY'
    },
    {
      name: 'Belgium',
      code: 'BE'
    },
    {
      name: 'Belize',
      code: 'BZ'
    },
    {
      name: 'Benin',
      code: 'BJ'
    },
    {
      name: 'Bermuda',
      code: 'BM'
    },
    {
      name: 'Bhutan',
      code: 'BT'
    },
    {
      name: 'Bolivia',
      code: 'BO'
    },
    {
      name: 'Bosnia and Herzegovina',
      code: 'BA'
    },
    {
      name: 'Botswana',
      code: 'BW'
    },
    {
      name: 'Bouvet Island',
      code: 'BV'
    },
    {
      name: 'Brazil',
      code: 'BR'
    },
    {
      name: 'British Indian Ocean Territory',
      code: 'IO'
    },
    {
      name: 'Brunei Darussalam',
      code: 'BN'
    },
    {
      name: 'Bulgaria',
      code: 'BG'
    },
    {
      name: 'Burkina Faso',
      code: 'BF'
    },
    {
      name: 'Burundi',
      code: 'BI'
    },
    {
      name: 'Cambodia',
      code: 'KH'
    },
    {
      name: 'Cameroon',
      code: 'CM'
    },
    {
      name: 'Canada',
      code: 'CA'
    },
    {
      name: 'Cape Verde',
      code: 'CV'
    },
    {
      name: 'Cayman Islands',
      code: 'KY'
    },
    {
      name: 'Central African Republic',
      code: 'CF'
    },
    {
      name: 'Chad',
      code: 'TD'
    },
    {
      name: 'Chile',
      code: 'CL'
    },
    {
      name: 'China',
      code: 'CN'
    },
    {
      name: 'Christmas Island',
      code: 'CX'
    },
    {
      name: 'Cocos (Keeling) Islands',
      code: 'CC'
    },
    {
      name: 'Colombia',
      code: 'CO'
    },
    {
      name: 'Comoros',
      code: 'KM'
    },
    {
      name: 'Congo',
      code: 'CG'
    },
    {
      name: 'Congo, The Democratic Republic of the',
      code: 'CD'
    },
    {
      name: 'Cook Islands',
      code: 'CK'
    },
    {
      name: 'Costa Rica',
      code: 'CR'
    },
    {
      name: 'Cote D\'Ivoire',
      code: 'CI'
    },
    {
      name: 'Croatia',
      code: 'HR'
    },
    {
      name: 'Cuba',
      code: 'CU'
    },
    {
      name: 'Cyprus',
      code: 'CY'
    },
    {
      name: 'Czech Republic',
      code: 'CZ'
    },
    {
      name: 'Denmark',
      code: 'DK'
    },
    {
      name: 'Djibouti',
      code: 'DJ'
    },
    {
      name: 'Dominica',
      code: 'DM'
    },
    {
      name: 'Dominican Republic',
      code: 'DO'
    },
    {
      name: 'Ecuador',
      code: 'EC'
    },
    {
      name: 'Egypt',
      code: 'EG'
    },
    {
      name: 'El Salvador',
      code: 'SV'
    },
    {
      name: 'Equatorial Guinea',
      code: 'GQ'
    },
    {
      name: 'Eritrea',
      code: 'ER'
    },
    {
      name: 'Estonia',
      code: 'EE'
    },
    {
      name: 'Ethiopia',
      code: 'ET'
    },
    {
      name: 'Falkland Islands (Malvinas)',
      code: 'FK'
    },
    {
      name: 'Faroe Islands',
      code: 'FO'
    },
    {
      name: 'Fiji',
      code: 'FJ'
    },
    {
      name: 'Finland',
      code: 'FI'
    },
    {
      name: 'France',
      code: 'FR'
    },
    {
      name: 'French Guiana',
      code: 'GF'
    },
    {
      name: 'French Polynesia',
      code: 'PF'
    },
    {
      name: 'French Southern Territories',
      code: 'TF'
    },
    {
      name: 'Gabon',
      code: 'GA'
    },
    {
      name: 'Gambia',
      code: 'GM'
    },
    {
      name: 'Georgia',
      code: 'GE'
    },
    {
      name: 'Germany',
      code: 'DE'
    },
    {
      name: 'Ghana',
      code: 'GH'
    },
    {
      name: 'Gibraltar',
      code: 'GI'
    },
    {
      name: 'Greece',
      code: 'GR'
    },
    {
      name: 'Greenland',
      code: 'GL'
    },
    {
      name: 'Grenada',
      code: 'GD'
    },
    {
      name: 'Guadeloupe',
      code: 'GP'
    },
    {
      name: 'Guam',
      code: 'GU'
    },
    {
      name: 'Guatemala',
      code: 'GT'
    },
    {
      name: 'Guernsey',
      code: 'GG'
    },
    {
      name: 'Guinea',
      code: 'GN'
    },
    {
      name: 'Guinea-Bissau',
      code: 'GW'
    },
    {
      name: 'Guyana',
      code: 'GY'
    },
    {
      name: 'Haiti',
      code: 'HT'
    },
    {
      name: 'Heard Island and Mcdonald Islands',
      code: 'HM'
    },
    {
      name: 'Holy See (Vatican City State)',
      code: 'VA'
    },
    {
      name: 'Honduras',
      code: 'HN'
    },
    {
      name: 'Hong Kong',
      code: 'HK'
    },
    {
      name: 'Hungary',
      code: 'HU'
    },
    {
      name: 'Iceland',
      code: 'IS'
    },
    {
      name: 'India',
      code: 'IN'
    },
    {
      name: 'Indonesia',
      code: 'ID'
    },
    {
      name: 'Iran, Islamic Republic Of',
      code: 'IR'
    },
    {
      name: 'Iraq',
      code: 'IQ'
    },
    {
      name: 'Ireland',
      code: 'IE'
    },
    {
      name: 'Isle of Man',
      code: 'IM'
    },
    {
      name: 'Israel',
      code: 'IL'
    },
    {
      name: 'Italy',
      code: 'IT'
    },
    {
      name: 'Jamaica',
      code: 'JM'
    },
    {
      name: 'Japan',
      code: 'JP'
    },
    {
      name: 'Jersey',
      code: 'JE'
    },
    {
      name: 'Jordan',
      code: 'JO'
    },
    {
      name: 'Kazakhstan',
      code: 'KZ'
    },
    {
      name: 'Kenya',
      code: 'KE'
    },
    {
      name: 'Kiribati',
      code: 'KI'
    },
    {
      name: 'Korea, Democratic People\'S Republic of',
      code: 'KP'
    },
    {
      name: 'Korea, Republic of',
      code: 'KR'
    },
    {
      name: 'Kuwait',
      code: 'KW'
    },
    {
      name: 'Kyrgyzstan',
      code: 'KG'
    },
    {
      name: 'Lao People\'S Democratic Republic',
      code: 'LA'
    },
    {
      name: 'Latvia',
      code: 'LV'
    },
    {
      name: 'Lebanon',
      code: 'LB'
    },
    {
      name: 'Lesotho',
      code: 'LS'
    },
    {
      name: 'Liberia',
      code: 'LR'
    },
    {
      name: 'Libyan Arab Jamahiriya',
      code: 'LY'
    },
    {
      name: 'Liechtenstein',
      code: 'LI'
    },
    {
      name: 'Lithuania',
      code: 'LT'
    },
    {
      name: 'Luxembourg',
      code: 'LU'
    },
    {
      name: 'Macao',
      code: 'MO'
    },
    {
      name: 'Macedonia, The Former Yugoslav Republic of',
      code: 'MK'
    },
    {
      name: 'Madagascar',
      code: 'MG'
    },
    {
      name: 'Malawi',
      code: 'MW'
    },
    {
      name: 'Malaysia',
      code: 'MY'
    },
    {
      name: 'Maldives',
      code: 'MV'
    },
    {
      name: 'Mali',
      code: 'ML'
    },
    {
      name: 'Malta',
      code: 'MT'
    },
    {
      name: 'Marshall Islands',
      code: 'MH'
    },
    {
      name: 'Martinique',
      code: 'MQ'
    },
    {
      name: 'Mauritania',
      code: 'MR'
    },
    {
      name: 'Mauritius',
      code: 'MU'
    },
    {
      name: 'Mayotte',
      code: 'YT'
    },
    {
      name: 'Mexico',
      code: 'MX'
    },
    {
      name: 'Micronesia, Federated States of',
      code: 'FM'
    },
    {
      name: 'Moldova, Republic of',
      code: 'MD'
    },
    {
      name: 'Monaco',
      code: 'MC'
    },
    {
      name: 'Mongolia',
      code: 'MN'
    },
    {
      name: 'Montserrat',
      code: 'MS'
    },
    {
      name: 'Morocco',
      code: 'MA'
    },
    {
      name: 'Mozambique',
      code: 'MZ'
    },
    {
      name: 'Myanmar',
      code: 'MM'
    },
    {
      name: 'Namibia',
      code: 'NA'
    },
    {
      name: 'Nauru',
      code: 'NR'
    },
    {
      name: 'Nepal',
      code: 'NP'
    },
    {
      name: 'Netherlands',
      code: 'NL'
    },
    {
      name: 'Netherlands Antilles',
      code: 'AN'
    },
    {
      name: 'New Caledonia',
      code: 'NC'
    },
    {
      name: 'New Zealand',
      code: 'NZ'
    },
    {
      name: 'Nicaragua',
      code: 'NI'
    },
    {
      name: 'Niger',
      code: 'NE'
    },
    {
      name: 'Nigeria',
      code: 'NG'
    },
    {
      name: 'Niue',
      code: 'NU'
    },
    {
      name: 'Norfolk Island',
      code: 'NF'
    },
    {
      name: 'Northern Mariana Islands',
      code: 'MP'
    },
    {
      name: 'Norway',
      code: 'NO'
    },
    {
      name: 'Oman',
      code: 'OM'
    },
    {
      name: 'Pakistan',
      code: 'PK'
    },
    {
      name: 'Palau',
      code: 'PW'
    },
    {
      name: 'Palestinian Territory, Occupied',
      code: 'PS'
    },
    {
      name: 'Panama',
      code: 'PA'
    },
    {
      name: 'Papua New Guinea',
      code: 'PG'
    },
    {
      name: 'Paraguay',
      code: 'PY'
    },
    {
      name: 'Peru',
      code: 'PE'
    },
    {
      name: 'Philippines',
      code: 'PH'
    },
    {
      name: 'Pitcairn',
      code: 'PN'
    },
    {
      name: 'Poland',
      code: 'PL'
    },
    {
      name: 'Portugal',
      code: 'PT'
    },
    {
      name: 'Puerto Rico',
      code: 'PR'
    },
    {
      name: 'Qatar',
      code: 'QA'
    },
    {
      name: 'Reunion',
      code: 'RE'
    },
    {
      name: 'Romania',
      code: 'RO'
    },
    {
      name: 'Russian Federation',
      code: 'RU'
    },
    {
      name: 'RWANDA',
      code: 'RW'
    },
    {
      name: 'Saint Helena',
      code: 'SH'
    },
    {
      name: 'Saint Kitts and Nevis',
      code: 'KN'
    },
    {
      name: 'Saint Lucia',
      code: 'LC'
    },
    {
      name: 'Saint Pierre and Miquelon',
      code: 'PM'
    },
    {
      name: 'Saint Vincent and the Grenadines',
      code: 'VC'
    },
    {
      name: 'Samoa',
      code: 'WS'
    },
    {
      name: 'San Marino',
      code: 'SM'
    },
    {
      name: 'Sao Tome and Principe',
      code: 'ST'
    },
    {
      name: 'Saudi Arabia',
      code: 'SA'
    },
    {
      name: 'Senegal',
      code: 'SN'
    },
    {
      name: 'Serbia and Montenegro',
      code: 'CS'
    },
    {
      name: 'Seychelles',
      code: 'SC'
    },
    {
      name: 'Sierra Leone',
      code: 'SL'
    },
    {
      name: 'Singapore',
      code: 'SG'
    },
    {
      name: 'Slovakia',
      code: 'SK'
    },
    {
      name: 'Slovenia',
      code: 'SI'
    },
    {
      name: 'Solomon Islands',
      code: 'SB'
    },
    {
      name: 'Somalia',
      code: 'SO'
    },
    {
      name: 'South Africa',
      code: 'ZA'
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: 'GS'
    },
    {
      name: 'Spain',
      code: 'ES'
    },
    {
      name: 'Sri Lanka',
      code: 'LK'
    },
    {
      name: 'Sudan',
      code: 'SD'
    },
    {
      name: 'Suriname',
      code: 'SR'
    },
    {
      name: 'Svalbard and Jan Mayen',
      code: 'SJ'
    },
    {
      name: 'Swaziland',
      code: 'SZ'
    },
    {
      name: 'Sweden',
      code: 'SE'
    },
    {
      name: 'Switzerland',
      code: 'CH'
    },
    {
      name: 'Syrian Arab Republic',
      code: 'SY'
    },
    {
      name: 'Taiwan, Province of China',
      code: 'TW'
    },
    {
      name: 'Tajikistan',
      code: 'TJ'
    },
    {
      name: 'Tanzania, United Republic of',
      code: 'TZ'
    },
    {
      name: 'Thailand',
      code: 'TH'
    },
    {
      name: 'Timor-Leste',
      code: 'TL'
    },
    {
      name: 'Togo',
      code: 'TG'
    },
    {
      name: 'Tokelau',
      code: 'TK'
    },
    {
      name: 'Tonga',
      code: 'TO'
    },
    {
      name: 'Trinidad and Tobago',
      code: 'TT'
    },
    {
      name: 'Tunisia',
      code: 'TN'
    },
    {
      name: 'Turkey',
      code: 'TR'
    },
    {
      name: 'Turkmenistan',
      code: 'TM'
    },
    {
      name: 'Turks and Caicos Islands',
      code: 'TC'
    },
    {
      name: 'Tuvalu',
      code: 'TV'
    },
    {
      name: 'Uganda',
      code: 'UG'
    },
    {
      name: 'Ukraine',
      code: 'UA'
    },
    {
      name: 'United Arab Emirates',
      code: 'AE'
    },
    {
      name: 'United Kingdom',
      code: 'GB'
    },
    {
      name: 'United States',
      code: 'US'
    },
    {
      name: 'United States Minor Outlying Islands',
      code: 'UM'
    },
    {
      name: 'Uruguay',
      code: 'UY'
    },
    {
      name: 'Uzbekistan',
      code: 'UZ'
    },
    {
      name: 'Vanuatu',
      code: 'VU'
    },
    {
      name: 'Venezuela',
      code: 'VE'
    },
    {
      name: 'Viet Nam',
      code: 'VN'
    },
    {
      name: 'Virgin Islands, British',
      code: 'VG'
    },
    {
      name: 'Virgin Islands, U.S.',
      code: 'VI'
    },
    {
      name: 'Wallis and Futuna',
      code: 'WF'
    },
    {
      name: 'Western Sahara',
      code: 'EH'
    },
    {
      name: 'Yemen',
      code: 'YE'
    },
    {
      name: 'Zambia',
      code: 'ZM'
    },
    {
      name: 'Zimbabwe',
      code: 'ZW'
    }
  ];

  if (await Countries.count() == 0) {
    await Countries.createEach(countriesList);
  }

  const skillsList = [{
    name: 'Calisthenics'
  }, {
    name: 'Weightlifting'
  }, {
    name: 'Crossfit'
  }, {
    name: 'Yoga'
  }, {
    name: 'Pilaties'
  }];

  if (await Skills.count() == 0) {
    await Skills.createEach(skillsList);
  }

  const languagesList = [{
      "code": "aa",
      "name": "Afar",
      "native": "Afar"
    },
    {
      "code": "ab",
      "name": "Abkhazian",
      "native": "Аҧсуа"
    },
    {
      "code": "af",
      "name": "Afrikaans",
      "native": "Afrikaans"
    },
    {
      "code": "ak",
      "name": "Akan",
      "native": "Akana"
    },
    {
      "code": "am",
      "name": "Amharic",
      "native": "አማርኛ"
    },
    {
      "code": "an",
      "name": "Aragonese",
      "native": "Aragonés"
    },
    {
      "code": "ar",
      "name": "Arabic",
      "native": "العربية",
      "rtl": 1
    },
    {
      "code": "as",
      "name": "Assamese",
      "native": "অসমীয়া"
    },
    {
      "code": "av",
      "name": "Avar",
      "native": "Авар"
    },
    {
      "code": "ay",
      "name": "Aymara",
      "native": "Aymar"
    },
    {
      "code": "az",
      "name": "Azerbaijani",
      "native": "Azərbaycanca / آذربايجان"
    },
    {
      "code": "ba",
      "name": "Bashkir",
      "native": "Башҡорт"
    },
    {
      "code": "be",
      "name": "Belarusian",
      "native": "Беларуская"
    },
    {
      "code": "bg",
      "name": "Bulgarian",
      "native": "Български"
    },
    {
      "code": "bh",
      "name": "Bihari",
      "native": "भोजपुरी"
    },
    {
      "code": "bi",
      "name": "Bislama",
      "native": "Bislama"
    },
    {
      "code": "bm",
      "name": "Bambara",
      "native": "Bamanankan"
    },
    {
      "code": "bn",
      "name": "Bengali",
      "native": "বাংলা"
    },
    {
      "code": "bo",
      "name": "Tibetan",
      "native": "བོད་ཡིག / Bod skad"
    },
    {
      "code": "br",
      "name": "Breton",
      "native": "Brezhoneg"
    },
    {
      "code": "bs",
      "name": "Bosnian",
      "native": "Bosanski"
    },
    {
      "code": "ca",
      "name": "Catalan",
      "native": "Català"
    },
    {
      "code": "ce",
      "name": "Chechen",
      "native": "Нохчийн"
    },
    {
      "code": "ch",
      "name": "Chamorro",
      "native": "Chamoru"
    },
    {
      "code": "co",
      "name": "Corsican",
      "native": "Corsu"
    },
    {
      "code": "cr",
      "name": "Cree",
      "native": "Nehiyaw"
    },
    {
      "code": "cs",
      "name": "Czech",
      "native": "Česky"
    },
    {
      "code": "cu",
      "name": "Old Church Slavonic / Old Bulgarian",
      "native": "словѣньскъ / slověnĭskŭ"
    },
    {
      "code": "cv",
      "name": "Chuvash",
      "native": "Чăваш"
    },
    {
      "code": "cy",
      "name": "Welsh",
      "native": "Cymraeg"
    },
    {
      "code": "da",
      "name": "Danish",
      "native": "Dansk"
    },
    {
      "code": "de",
      "name": "German",
      "native": "Deutsch"
    },
    {
      "code": "dv",
      "name": "Divehi",
      "native": "ދިވެހިބަސް",
      "rtl": 1
    },
    {
      "code": "dz",
      "name": "Dzongkha",
      "native": "ཇོང་ཁ"
    },
    {
      "code": "ee",
      "name": "Ewe",
      "native": "Ɛʋɛ"
    },
    {
      "code": "el",
      "name": "Greek",
      "native": "Ελληνικά"
    },
    {
      "code": "en",
      "name": "English",
      "native": "English"
    },
    {
      "code": "eo",
      "name": "Esperanto",
      "native": "Esperanto"
    },
    {
      "code": "es",
      "name": "Spanish",
      "native": "Español"
    },
    {
      "code": "et",
      "name": "Estonian",
      "native": "Eesti"
    },
    {
      "code": "eu",
      "name": "Basque",
      "native": "Euskara"
    },
    {
      "code": "fa",
      "name": "Persian",
      "native": "فارسی",
      "rtl": 1
    },
    {
      "code": "ff",
      "name": "Peul",
      "native": "Fulfulde"
    },
    {
      "code": "fi",
      "name": "Finnish",
      "native": "Suomi"
    },
    {
      "code": "fj",
      "name": "Fijian",
      "native": "Na Vosa Vakaviti"
    },
    {
      "code": "fo",
      "name": "Faroese",
      "native": "Føroyskt"
    },
    {
      "code": "fr",
      "name": "French",
      "native": "Français"
    },
    {
      "code": "fy",
      "name": "West Frisian",
      "native": "Frysk"
    },
    {
      "code": "ga",
      "name": "Irish",
      "native": "Gaeilge"
    },
    {
      "code": "gd",
      "name": "Scottish Gaelic",
      "native": "Gàidhlig"
    },
    {
      "code": "gl",
      "name": "Galician",
      "native": "Galego"
    },
    {
      "code": "gn",
      "name": "Guarani",
      "native": "Avañe'ẽ"
    },
    {
      "code": "gu",
      "name": "Gujarati",
      "native": "ગુજરાતી"
    },
    {
      "code": "gv",
      "name": "Manx",
      "native": "Gaelg"
    },
    {
      "code": "ha",
      "name": "Hausa",
      "native": "هَوُسَ",
      "rtl": 1
    },
    {
      "code": "he",
      "name": "Hebrew",
      "native": "עברית",
      "rtl": 1
    },
    {
      "code": "hi",
      "name": "Hindi",
      "native": "हिन्दी"
    },
    {
      "code": "ho",
      "name": "Hiri Motu",
      "native": "Hiri Motu"
    },
    {
      "code": "hr",
      "name": "Croatian",
      "native": "Hrvatski"
    },
    {
      "code": "ht",
      "name": "Haitian",
      "native": "Krèyol ayisyen"
    },
    {
      "code": "hu",
      "name": "Hungarian",
      "native": "Magyar"
    },
    {
      "code": "hy",
      "name": "Armenian",
      "native": "Հայերեն"
    },
    {
      "code": "hz",
      "name": "Herero",
      "native": "Otsiherero"
    },
    {
      "code": "ia",
      "name": "Interlingua",
      "native": "Interlingua"
    },
    {
      "code": "id",
      "name": "Indonesian",
      "native": "Bahasa Indonesia"
    },
    {
      "code": "ie",
      "name": "Interlingue",
      "native": "Interlingue"
    },
    {
      "code": "ig",
      "name": "Igbo",
      "native": "Igbo"
    },
    {
      "code": "ii",
      "name": "Sichuan Yi",
      "native": "ꆇꉙ / 四川彝语"
    },
    {
      "code": "ik",
      "name": "Inupiak",
      "native": "Iñupiak"
    },
    {
      "code": "io",
      "name": "Ido",
      "native": "Ido"
    },
    {
      "code": "is",
      "name": "Icelandic",
      "native": "Íslenska"
    },
    {
      "code": "it",
      "name": "Italian",
      "native": "Italiano"
    },
    {
      "code": "iu",
      "name": "Inuktitut",
      "native": "ᐃᓄᒃᑎᑐᑦ"
    },
    {
      "code": "ja",
      "name": "Japanese",
      "native": "日本語"
    },
    {
      "code": "jv",
      "name": "Javanese",
      "native": "Basa Jawa"
    },
    {
      "code": "ka",
      "name": "Georgian",
      "native": "ქართული"
    },
    {
      "code": "kg",
      "name": "Kongo",
      "native": "KiKongo"
    },
    {
      "code": "ki",
      "name": "Kikuyu",
      "native": "Gĩkũyũ"
    },
    {
      "code": "kj",
      "name": "Kuanyama",
      "native": "Kuanyama"
    },
    {
      "code": "kk",
      "name": "Kazakh",
      "native": "Қазақша"
    },
    {
      "code": "kl",
      "name": "Greenlandic",
      "native": "Kalaallisut"
    },
    {
      "code": "km",
      "name": "Cambodian",
      "native": "ភាសាខ្មែរ"
    },
    {
      "code": "kn",
      "name": "Kannada",
      "native": "ಕನ್ನಡ"
    },
    {
      "code": "ko",
      "name": "Korean",
      "native": "한국어"
    },
    {
      "code": "kr",
      "name": "Kanuri",
      "native": "Kanuri"
    },
    {
      "code": "ks",
      "name": "Kashmiri",
      "native": "कश्मीरी / كشميري",
      "rtl": 1
    },
    {
      "code": "ku",
      "name": "Kurdish",
      "native": "Kurdî / كوردی",
      "rtl": 1
    },
    {
      "code": "kv",
      "name": "Komi",
      "native": "Коми"
    },
    {
      "code": "kw",
      "name": "Cornish",
      "native": "Kernewek"
    },
    {
      "code": "ky",
      "name": "Kirghiz",
      "native": "Kırgızca / Кыргызча"
    },
    {
      "code": "la",
      "name": "Latin",
      "native": "Latina"
    },
    {
      "code": "lb",
      "name": "Luxembourgish",
      "native": "Lëtzebuergesch"
    },
    {
      "code": "lg",
      "name": "Ganda",
      "native": "Luganda"
    },
    {
      "code": "li",
      "name": "Limburgian",
      "native": "Limburgs"
    },
    {
      "code": "ln",
      "name": "Lingala",
      "native": "Lingála"
    },
    {
      "code": "lo",
      "name": "Laotian",
      "native": "ລາວ / Pha xa lao"
    },
    {
      "code": "lt",
      "name": "Lithuanian",
      "native": "Lietuvių"
    },
    {
      "code": "lu",
      "name": "Luba-Katanga",
      "native": "Tshiluba"
    },
    {
      "code": "lv",
      "name": "Latvian",
      "native": "Latviešu"
    },
    {
      "code": "mg",
      "name": "Malagasy",
      "native": "Malagasy"
    },
    {
      "code": "mh",
      "name": "Marshallese",
      "native": "Kajin Majel / Ebon"
    },
    {
      "code": "mi",
      "name": "Maori",
      "native": "Māori"
    },
    {
      "code": "mk",
      "name": "Macedonian",
      "native": "Македонски"
    },
    {
      "code": "ml",
      "name": "Malayalam",
      "native": "മലയാളം"
    },
    {
      "code": "mn",
      "name": "Mongolian",
      "native": "Монгол"
    },
    {
      "code": "mo",
      "name": "Moldovan",
      "native": "Moldovenească"
    },
    {
      "code": "mr",
      "name": "Marathi",
      "native": "मराठी"
    },
    {
      "code": "ms",
      "name": "Malay",
      "native": "Bahasa Melayu"
    },
    {
      "code": "mt",
      "name": "Maltese",
      "native": "bil-Malti"
    },
    {
      "code": "my",
      "name": "Burmese",
      "native": "မြန်မာစာ"
    },
    {
      "code": "na",
      "name": "Nauruan",
      "native": "Dorerin Naoero"
    },
    {
      "code": "nb",
      "name": "Norwegian Bokmål",
      "native": "Norsk bokmål"
    },
    {
      "code": "nd",
      "name": "North Ndebele",
      "native": "Sindebele"
    },
    {
      "code": "ne",
      "name": "Nepali",
      "native": "नेपाली"
    },
    {
      "code": "ng",
      "name": "Ndonga",
      "native": "Oshiwambo"
    },
    {
      "code": "nl",
      "name": "Dutch",
      "native": "Nederlands"
    },
    {
      "code": "nn",
      "name": "Norwegian Nynorsk",
      "native": "Norsk nynorsk"
    },
    {
      "code": "no",
      "name": "Norwegian",
      "native": "Norsk"
    },
    {
      "code": "nr",
      "name": "South Ndebele",
      "native": "isiNdebele"
    },
    {
      "code": "nv",
      "name": "Navajo",
      "native": "Diné bizaad"
    },
    {
      "code": "ny",
      "name": "Chichewa",
      "native": "Chi-Chewa"
    },
    {
      "code": "oc",
      "name": "Occitan",
      "native": "Occitan"
    },
    {
      "code": "oj",
      "name": "Ojibwa",
      "native": "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"
    },
    {
      "code": "om",
      "name": "Oromo",
      "native": "Oromoo"
    },
    {
      "code": "or",
      "name": "Oriya",
      "native": "ଓଡ଼ିଆ"
    },
    {
      "code": "os",
      "name": "Ossetian / Ossetic",
      "native": "Иронау"
    },
    {
      "code": "pa",
      "name": "Panjabi / Punjabi",
      "native": "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
    },
    {
      "code": "pi",
      "name": "Pali",
      "native": "Pāli / पाऴि"
    },
    {
      "code": "pl",
      "name": "Polish",
      "native": "Polski"
    },
    {
      "code": "ps",
      "name": "Pashto",
      "native": "پښتو",
      "rtl": 1
    },
    {
      "code": "pt",
      "name": "Portuguese",
      "native": "Português"
    },
    {
      "code": "qu",
      "name": "Quechua",
      "native": "Runa Simi"
    },
    {
      "code": "rm",
      "name": "Raeto Romance",
      "native": "Rumantsch"
    },
    {
      "code": "rn",
      "name": "Kirundi",
      "native": "Kirundi"
    },
    {
      "code": "ro",
      "name": "Romanian",
      "native": "Română"
    },
    {
      "code": "ru",
      "name": "Russian",
      "native": "Русский"
    },
    {
      "code": "rw",
      "name": "Rwandi",
      "native": "Kinyarwandi"
    },
    {
      "code": "sa",
      "name": "Sanskrit",
      "native": "संस्कृतम्"
    },
    {
      "code": "sc",
      "name": "Sardinian",
      "native": "Sardu"
    },
    {
      "code": "sd",
      "name": "Sindhi",
      "native": "सिनधि"
    },
    {
      "code": "se",
      "name": "Northern Sami",
      "native": "Sámegiella"
    },
    {
      "code": "sg",
      "name": "Sango",
      "native": "Sängö"
    },
    {
      "code": "sh",
      "name": "Serbo-Croatian",
      "native": "Srpskohrvatski / Српскохрватски"
    },
    {
      "code": "si",
      "name": "Sinhalese",
      "native": "සිංහල"
    },
    {
      "code": "sk",
      "name": "Slovak",
      "native": "Slovenčina"
    },
    {
      "code": "sl",
      "name": "Slovenian",
      "native": "Slovenščina"
    },
    {
      "code": "sm",
      "name": "Samoan",
      "native": "Gagana Samoa"
    },
    {
      "code": "sn",
      "name": "Shona",
      "native": "chiShona"
    },
    {
      "code": "so",
      "name": "Somalia",
      "native": "Soomaaliga"
    },
    {
      "code": "sq",
      "name": "Albanian",
      "native": "Shqip"
    },
    {
      "code": "sr",
      "name": "Serbian",
      "native": "Српски"
    },
    {
      "code": "ss",
      "name": "Swati",
      "native": "SiSwati"
    },
    {
      "code": "st",
      "name": "Southern Sotho",
      "native": "Sesotho"
    },
    {
      "code": "su",
      "name": "Sundanese",
      "native": "Basa Sunda"
    },
    {
      "code": "sv",
      "name": "Swedish",
      "native": "Svenska"
    },
    {
      "code": "sw",
      "name": "Swahili",
      "native": "Kiswahili"
    },
    {
      "code": "ta",
      "name": "Tamil",
      "native": "தமிழ்"
    },
    {
      "code": "te",
      "name": "Telugu",
      "native": "తెలుగు"
    },
    {
      "code": "tg",
      "name": "Tajik",
      "native": "Тоҷикӣ"
    },
    {
      "code": "th",
      "name": "Thai",
      "native": "ไทย / Phasa Thai"
    },
    {
      "code": "ti",
      "name": "Tigrinya",
      "native": "ትግርኛ"
    },
    {
      "code": "tk",
      "name": "Turkmen",
      "native": "Туркмен / تركمن"
    },
    {
      "code": "tl",
      "name": "Tagalog / Filipino",
      "native": "Tagalog"
    },
    {
      "code": "tn",
      "name": "Tswana",
      "native": "Setswana"
    },
    {
      "code": "to",
      "name": "Tonga",
      "native": "Lea Faka-Tonga"
    },
    {
      "code": "tr",
      "name": "Turkish",
      "native": "Türkçe"
    },
    {
      "code": "ts",
      "name": "Tsonga",
      "native": "Xitsonga"
    },
    {
      "code": "tt",
      "name": "Tatar",
      "native": "Tatarça"
    },
    {
      "code": "tw",
      "name": "Twi",
      "native": "Twi"
    },
    {
      "code": "ty",
      "name": "Tahitian",
      "native": "Reo Mā`ohi"
    },
    {
      "code": "ug",
      "name": "Uyghur",
      "native": "Uyƣurqə / ئۇيغۇرچە"
    },
    {
      "code": "uk",
      "name": "Ukrainian",
      "native": "Українська"
    },
    {
      "code": "ur",
      "name": "Urdu",
      "native": "اردو",
      "rtl": 1
    },
    {
      "code": "uz",
      "name": "Uzbek",
      "native": "Ўзбек"
    },
    {
      "code": "ve",
      "name": "Venda",
      "native": "Tshivenḓa"
    },
    {
      "code": "vi",
      "name": "Vietnamese",
      "native": "Tiếng Việt"
    },
    {
      "code": "vo",
      "name": "Volapük",
      "native": "Volapük"
    },
    {
      "code": "wa",
      "name": "Walloon",
      "native": "Walon"
    },
    {
      "code": "wo",
      "name": "Wolof",
      "native": "Wollof"
    },
    {
      "code": "xh",
      "name": "Xhosa",
      "native": "isiXhosa"
    },
    {
      "code": "yi",
      "name": "Yiddish",
      "native": "ייִדיש",
      "rtl": 1
    },
    {
      "code": "yo",
      "name": "Yoruba",
      "native": "Yorùbá"
    },
    {
      "code": "za",
      "name": "Zhuang",
      "native": "Cuengh / Tôô / 壮语"
    },
    {
      "code": "zh",
      "name": "Chinese",
      "native": "中文"
    },
    {
      "code": "zu",
      "name": "Zulu",
      "native": "isiZulu"
    }
  ];

  if (await Languages.count() == 0) {
    await Languages.createEach(languagesList);
  }

  console.log('Seeds are ready to grow.');
};
