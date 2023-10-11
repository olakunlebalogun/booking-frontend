import React, {useEffect, useState} from 'react'
import axios from 'axios'

// import {cardOneList} from './../components/dashboard/dashboard-data'

import DashNav from '../components/dashboard/DashNav'
import DashCard from '../components/dashboard/DashCard'
import Table from '../components/dashboard/Table'

import './../assets/css/pages/Dashboard.css'
import LineChart from '../components/dashboard/LineChart'
import BarChart from '../components/dashboard/BarChart'


export const tableData = [
  {
    id: 1,
    firstName: 'Roderic',
    lastName: 'Byrde',
    email: 'rbyrde0@whitehouse.gov',
    phone: '707-832-5231',
    appointmentDate: '18/06/2023',
  },
  {
    id: 2,
    firstName: 'Mirabelle',
    lastName: 'Pargiter',
    email: 'mpargiter1@ca.gov',
    phone: '550-773-7159',
    appointmentDate: '31/01/2023',
  },
  {
    id: 3,
    firstName: 'Edmon',
    lastName: 'Scneider',
    email: 'escneider2@craigslist.org',
    phone: '872-948-3135',
    appointmentDate: '09/10/2022',
  },
  {
    id: 4,
    firstName: 'Kial',
    lastName: 'Enden',
    email: 'kenden3@mysql.com',
    phone: '669-554-1945',
    appointmentDate: '30/05/2023',
  },
  {
    id: 5,
    firstName: 'Damien',
    lastName: 'Rickett',
    email: 'drickett4@yellowpages.com',
    phone: '879-135-1535',
    appointmentDate: '18/05/2023',
  },
  {
    id: 6,
    firstName: 'Garvey',
    lastName: 'Wisedale',
    email: 'gwisedale5@icio.us',
    phone: '614-654-2300',
    appointmentDate: '03/07/2023',
  },
  {
    id: 7,
    firstName: 'Nanete',
    lastName: 'Ivimey',
    email: 'nivimey6@wufoo.com',
    phone: '760-776-0441',
    appointmentDate: '24/02/2023',
  },
  {
    id: 8,
    firstName: 'Clarence',
    lastName: 'Abrahamoff',
    email: 'cabrahamoff7@sourceforge.net',
    phone: '958-546-0582',
    appointmentDate: '14/06/2023',
  },
  {
    id: 9,
    firstName: 'Darda',
    lastName: 'Polding',
    email: 'dpolding8@china.com.cn',
    phone: '404-169-1456',
    appointmentDate: '27/12/2022',
  },
  {
    id: 10,
    firstName: 'Lynnette',
    lastName: 'Pettifor',
    email: 'lpettifor9@yellowpages.com',
    phone: '667-905-2690',
    appointmentDate: '08/02/2023',
  },
  {
    id: 11,
    firstName: 'Rey',
    lastName: 'Thorneywork',
    email: 'rthorneyworka@wikia.com',
    phone: '304-742-3011',
    appointmentDate: '11/01/2023',
  },
  {
    id: 12,
    firstName: 'Burnard',
    lastName: 'Pescod',
    email: 'bpescodb@xrea.com',
    phone: '203-208-4538',
    appointmentDate: '25/03/2023',
  },
  {
    id: 13,
    firstName: 'Jarrad',
    lastName: 'Craighead',
    email: 'jcraigheadc@desdev.cn',
    phone: '875-843-1196',
    appointmentDate: '24/12/2022',
  },
  {
    id: 14,
    firstName: 'Dolph',
    lastName: 'Fontelles',
    email: 'dfontellesd@usa.gov',
    phone: '892-177-8759',
    appointmentDate: '31/07/2023',
  },
  {
    id: 15,
    firstName: 'Didi',
    lastName: 'Lauks',
    email: 'dlaukse@usa.gov',
    phone: '610-293-1273',
    appointmentDate: '22/04/2023',
  },
  {
    id: 16,
    firstName: 'Anthea',
    lastName: 'Moret',
    email: 'amoretf@dailymail.co.uk',
    phone: '557-410-6990',
    appointmentDate: '20/06/2023',
  },
  {
    id: 17,
    firstName: 'Fitzgerald',
    lastName: 'Thurlbeck',
    email: 'fthurlbeckg@goodreads.com',
    phone: '333-946-6975',
    appointmentDate: '26/02/2023',
  },
  {
    id: 18,
    firstName: 'Trescha',
    lastName: 'Sturgeon',
    email: 'tsturgeonh@ed.gov',
    phone: '392-863-6105',
    appointmentDate: '22/06/2023',
  },
  {
    id: 19,
    firstName: 'Fannie',
    lastName: 'Moxham',
    email: 'fmoxhami@webeden.co.uk',
    phone: '151-786-7855',
    appointmentDate: '05/03/2023',
  },
  {
    id: 20,
    firstName: 'Marne',
    lastName: 'Hannam',
    email: 'mhannamj@ycombinator.com',
    phone: '867-696-4729',
    appointmentDate: '27/01/2023',
  },
  {
    id: 21,
    firstName: 'Meade',
    lastName: 'De Michetti',
    email: 'mdemichettik@hc360.com',
    phone: '166-717-7105',
    appointmentDate: '07/05/2023',
  },
  {
    id: 22,
    firstName: 'Garrard',
    lastName: 'Buffey',
    email: 'gbuffeyl@php.net',
    phone: '403-451-2901',
    appointmentDate: '02/04/2023',
  },
  {
    id: 23,
    firstName: 'Norby',
    lastName: 'Pariso',
    email: 'nparisom@live.com',
    phone: '733-827-1143',
    appointmentDate: '11/03/2023',
  },
  {
    id: 24,
    firstName: 'Flori',
    lastName: 'Denty',
    email: 'fdentyn@netlog.com',
    phone: '369-904-0588',
    appointmentDate: '03/01/2023',
  },
  {
    id: 25,
    firstName: 'Kira',
    lastName: 'Cortin',
    email: 'kcortino@google.de',
    phone: '201-437-6484',
    appointmentDate: '24/07/2023',
  },
  {
    id: 26,
    firstName: 'Opalina',
    lastName: 'Darracott',
    email: 'odarracottp@bandcamp.com',
    phone: '953-198-9146',
    appointmentDate: '27/10/2022',
  },
  {
    id: 27,
    firstName: 'Kori',
    lastName: 'Inett',
    email: 'kinettq@sciencedirect.com',
    phone: '376-756-1413',
    appointmentDate: '12/10/2022',
  },
  {
    id: 28,
    firstName: 'Maritsa',
    lastName: 'Ceaplen',
    email: 'mceaplenr@jalbum.net',
    phone: '844-510-2892',
    appointmentDate: '19/02/2023',
  },
  {
    id: 29,
    firstName: 'Herminia',
    lastName: 'Hebbes',
    email: 'hhebbess@diigo.com',
    phone: '897-888-2094',
    appointmentDate: '26/10/2022',
  },
  {
    id: 30,
    firstName: 'Noble',
    lastName: 'Ennion',
    email: 'nenniont@bigcartel.com',
    phone: '773-950-4972',
    appointmentDate: '30/04/2023',
  },
  {
    id: 31,
    firstName: 'Bartholemy',
    lastName: 'Druhan',
    email: 'bdruhanu@utexas.edu',
    phone: '450-244-9531',
    appointmentDate: '16/05/2023',
  },
  {
    id: 32,
    firstName: 'Ruth',
    lastName: 'Ditt',
    email: 'rdittv@walmart.com',
    phone: '434-349-3272',
    appointmentDate: '19/10/2022',
  },
  {
    id: 33,
    firstName: 'Dareen',
    lastName: 'Hiscoe',
    email: 'dhiscoew@altervista.org',
    phone: '444-456-0057',
    appointmentDate: '13/11/2022',
  },
  {
    id: 34,
    firstName: 'Lynne',
    lastName: 'Wilkie',
    email: 'lwilkiex@naver.com',
    phone: '164-910-2237',
    appointmentDate: '12/04/2023',
  },
  {
    id: 35,
    firstName: 'Charmine',
    lastName: 'Gladebeck',
    email: 'cgladebecky@twitpic.com',
    phone: '444-907-2367',
    appointmentDate: '05/05/2023',
  },
  {
    id: 36,
    firstName: 'Mariel',
    lastName: 'Hatcliffe',
    email: 'mhatcliffez@huffingtonpost.com',
    phone: '987-667-9556',
    appointmentDate: '26/07/2023',
  },
  {
    id: 37,
    firstName: 'Papagena',
    lastName: 'Blasoni',
    email: 'pblasoni10@nyu.edu',
    phone: '459-145-5360',
    appointmentDate: '03/11/2022',
  },
  {
    id: 38,
    firstName: 'Goober',
    lastName: 'Biggar',
    email: 'gbiggar11@dmoz.org',
    phone: '393-141-8816',
    appointmentDate: '04/11/2022',
  },
  {
    id: 39,
    firstName: 'Arron',
    lastName: 'Knappen',
    email: 'aknappen12@reddit.com',
    phone: '418-561-4178',
    appointmentDate: '10/08/2023',
  },
  {
    id: 40,
    firstName: 'Xenia',
    lastName: 'Shingfield',
    email: 'xshingfield13@adobe.com',
    phone: '201-283-0679',
    appointmentDate: '10/03/2023',
  },
  {
    id: 41,
    firstName: 'Tildie',
    lastName: 'Kersting',
    email: 'tkersting14@cnbc.com',
    phone: '709-770-7215',
    appointmentDate: '27/07/2023',
  },
  {
    id: 42,
    firstName: 'Toiboid',
    lastName: 'Swash',
    email: 'tswash15@1und1.de',
    phone: '311-525-2803',
    appointmentDate: '13/12/2022',
  },
  {
    id: 43,
    firstName: 'Jaimie',
    lastName: 'Clapton',
    email: 'jclapton16@ibm.com',
    phone: '665-295-3487',
    appointmentDate: '30/03/2023',
  },
  {
    id: 44,
    firstName: 'Bibbie',
    lastName: 'Tumilson',
    email: 'btumilson17@cyberchimps.com',
    phone: '521-594-1247',
    appointmentDate: '08/12/2022',
  },
  {
    id: 45,
    firstName: 'Ruby',
    lastName: 'Vanderson',
    email: 'rvanderson18@squidoo.com',
    phone: '850-671-1018',
    appointmentDate: '11/06/2023',
  },
  {
    id: 46,
    firstName: 'Charita',
    lastName: 'Stoffersen',
    email: 'cstoffersen19@barnesandnoble.com',
    phone: '153-897-3082',
    appointmentDate: '17/03/2023',
  },
  {
    id: 47,
    firstName: 'Merry',
    lastName: 'Di Maggio',
    email: 'mdimaggio1a@g.co',
    phone: '235-291-6722',
    appointmentDate: '17/10/2022',
  },
  {
    id: 48,
    firstName: 'Sileas',
    lastName: 'Melloi',
    email: 'smelloi1b@miitbeian.gov.cn',
    phone: '756-552-9333',
    appointmentDate: '25/05/2023',
  },
  {
    id: 49,
    firstName: 'Ernesto',
    lastName: 'Sherbrooke',
    email: 'esherbrooke1c@usda.gov',
    phone: '861-427-1263',
    appointmentDate: '11/03/2023',
  },
  {
    id: 50,
    firstName: 'Moria',
    lastName: 'Astles',
    email: 'mastles1d@google.com.au',
    phone: '269-121-8200',
    appointmentDate: '29/10/2022',
  },
  {
    id: 51,
    firstName: 'Sherwynd',
    lastName: 'Rofe',
    email: 'srofe1e@unicef.org',
    phone: '776-181-6582',
    appointmentDate: '23/10/2022',
  },
  {
    id: 52,
    firstName: 'Clair',
    lastName: 'Wentworth',
    email: 'cwentworth1f@blogs.com',
    phone: '116-228-7146',
    appointmentDate: '11/10/2022',
  },
  {
    id: 53,
    firstName: 'Mair',
    lastName: 'McRinn',
    email: 'mmcrinn1g@sakura.ne.jp',
    phone: '305-188-3209',
    appointmentDate: '03/03/2023',
  },
  {
    id: 54,
    firstName: 'Rock',
    lastName: 'Pechold',
    email: 'rpechold1h@geocities.jp',
    phone: '885-143-9028',
    appointmentDate: '13/10/2022',
  },
  {
    id: 55,
    firstName: 'Grethel',
    lastName: 'Hewell',
    email: 'ghewell1i@census.gov',
    phone: '395-604-4371',
    appointmentDate: '29/11/2022',
  },
  {
    id: 56,
    firstName: 'Hadria',
    lastName: "O'Glessane",
    email: 'hoglessane1j@addthis.com',
    phone: '179-913-7612',
    appointmentDate: '21/03/2023',
  },
  {
    id: 57,
    firstName: 'Krissy',
    lastName: 'Elderbrant',
    email: 'kelderbrant1k@unblog.fr',
    phone: '306-223-0396',
    appointmentDate: '19/02/2023',
  },
  {
    id: 58,
    firstName: 'Dona',
    lastName: 'Silman',
    email: 'dsilman1l@nasa.gov',
    phone: '501-242-8276',
    appointmentDate: '31/10/2022',
  },
  {
    id: 59,
    firstName: 'Mohandis',
    lastName: 'Shovelton',
    email: 'mshovelton1m@mail.ru',
    phone: '402-504-4408',
    appointmentDate: '08/04/2023',
  },
  {
    id: 60,
    firstName: 'Fred',
    lastName: 'Kalaher',
    email: 'fkalaher1n@redcross.org',
    phone: '258-542-0520',
    appointmentDate: '14/02/2023',
  },
  {
    id: 61,
    firstName: 'Analise',
    lastName: 'Screeton',
    email: 'ascreeton1o@fotki.com',
    phone: '972-641-3522',
    appointmentDate: '07/02/2023',
  },
  {
    id: 62,
    firstName: 'Delaney',
    lastName: 'Stiggers',
    email: 'dstiggers1p@topsy.com',
    phone: '126-645-6967',
    appointmentDate: '18/05/2023',
  },
  {
    id: 63,
    firstName: 'Olwen',
    lastName: 'Klimkin',
    email: 'oklimkin1q@yandex.ru',
    phone: '274-255-8066',
    appointmentDate: '24/09/2023',
  },
  {
    id: 64,
    firstName: 'Willetta',
    lastName: 'Brann',
    email: 'wbrann1r@clickbank.net',
    phone: '520-637-3909',
    appointmentDate: '04/08/2023',
  },
  {
    id: 65,
    firstName: 'Elbertina',
    lastName: 'Priddy',
    email: 'epriddy1s@wired.com',
    phone: '148-970-1127',
    appointmentDate: '05/06/2023',
  },
  {
    id: 66,
    firstName: 'Abagail',
    lastName: 'Doerrling',
    email: 'adoerrling1t@chron.com',
    phone: '727-314-7272',
    appointmentDate: '11/02/2023',
  },
  {
    id: 67,
    firstName: 'Othelia',
    lastName: 'Karchewski',
    email: 'okarchewski1u@vistaprint.com',
    phone: '155-256-8030',
    appointmentDate: '29/03/2023',
  },
  {
    id: 68,
    firstName: 'Willard',
    lastName: 'Pulham',
    email: 'wpulham1v@google.com.au',
    phone: '340-751-5048',
    appointmentDate: '23/07/2023',
  },
  {
    id: 69,
    firstName: 'Parsifal',
    lastName: 'Tumpane',
    email: 'ptumpane1w@cam.ac.uk',
    phone: '305-592-5037',
    appointmentDate: '29/11/2022',
  },
  {
    id: 70,
    firstName: 'Niko',
    lastName: 'Mantrup',
    email: 'nmantrup1x@vimeo.com',
    phone: '462-384-7236',
    appointmentDate: '21/06/2023',
  },
  {
    id: 71,
    firstName: 'Pen',
    lastName: 'Purseglove',
    email: 'ppurseglove1y@apache.org',
    phone: '343-257-1915',
    appointmentDate: '16/07/2023',
  },
  {
    id: 72,
    firstName: 'Lori',
    lastName: 'Lenham',
    email: 'llenham1z@diigo.com',
    phone: '644-287-8651',
    appointmentDate: '14/08/2023',
  },
  {
    id: 73,
    firstName: 'Bryanty',
    lastName: 'Kilbee',
    email: 'bkilbee20@theglobeandmail.com',
    phone: '114-344-0678',
    appointmentDate: '31/07/2023',
  },
  {
    id: 74,
    firstName: 'Nick',
    lastName: 'Hubbuck',
    email: 'nhubbuck21@alibaba.com',
    phone: '588-170-4254',
    appointmentDate: '06/03/2023',
  },
  {
    id: 75,
    firstName: 'Maria',
    lastName: 'Lacey',
    email: 'mlacey22@tinyurl.com',
    phone: '377-468-5858',
    appointmentDate: '17/11/2022',
  },
  {
    id: 76,
    firstName: 'Michail',
    lastName: 'Edmed',
    email: 'medmed23@usgs.gov',
    phone: '924-269-0889',
    appointmentDate: '18/07/2023',
  },
  {
    id: 77,
    firstName: 'Eolanda',
    lastName: 'Palphreyman',
    email: 'epalphreyman24@ibm.com',
    phone: '922-347-2495',
    appointmentDate: '17/06/2023',
  },
  {
    id: 78,
    firstName: 'Kendal',
    lastName: 'Gurden',
    email: 'kgurden25@dmoz.org',
    phone: '359-822-5718',
    appointmentDate: '06/12/2022',
  },
  {
    id: 79,
    firstName: 'Lurline',
    lastName: 'Coil',
    email: 'lcoil26@webeden.co.uk',
    phone: '204-482-1913',
    appointmentDate: '26/11/2022',
  },
  {
    id: 80,
    firstName: 'Jilleen',
    lastName: 'Klaessen',
    email: 'jklaessen27@gnu.org',
    phone: '254-523-8253',
    appointmentDate: '02/04/2023',
  },
  {
    id: 81,
    firstName: 'Byrann',
    lastName: 'McKeady',
    email: 'bmckeady28@abc.net.au',
    phone: '236-335-5125',
    appointmentDate: '24/09/2023',
  },
  {
    id: 82,
    firstName: 'Elia',
    lastName: 'Bowery',
    email: 'ebowery29@desdev.cn',
    phone: '946-832-4953',
    appointmentDate: '29/04/2023',
  },
  {
    id: 83,
    firstName: 'Court',
    lastName: 'Woolford',
    email: 'cwoolford2a@lulu.com',
    phone: '530-112-5330',
    appointmentDate: '21/06/2023',
  },
  {
    id: 84,
    firstName: 'Levey',
    lastName: 'McFie',
    email: 'lmcfie2b@utexas.edu',
    phone: '574-938-2376',
    appointmentDate: '05/04/2023',
  },
  {
    id: 85,
    firstName: 'Mort',
    lastName: 'Baggot',
    email: 'mbaggot2c@archive.org',
    phone: '849-195-5449',
    appointmentDate: '22/02/2023',
  },
  {
    id: 86,
    firstName: 'Ruthy',
    lastName: 'Elderkin',
    email: 'relderkin2d@pcworld.com',
    phone: '595-279-1038',
    appointmentDate: '21/11/2022',
  },
  {
    id: 87,
    firstName: 'Nat',
    lastName: 'Brownlow',
    email: 'nbrownlow2e@buzzfeed.com',
    phone: '194-873-1902',
    appointmentDate: '20/05/2023',
  },
  {
    id: 88,
    firstName: 'Hillary',
    lastName: 'Crabbe',
    email: 'hcrabbe2f@simplemachines.org',
    phone: '314-128-9389',
    appointmentDate: '05/03/2023',
  },
  {
    id: 89,
    firstName: 'Basilius',
    lastName: 'Townshend',
    email: 'btownshend2g@yahoo.co.jp',
    phone: '804-184-1271',
    appointmentDate: '26/12/2022',
  },
  {
    id: 90,
    firstName: 'Clemens',
    lastName: 'MacCollom',
    email: 'cmaccollom2h@typepad.com',
    phone: '911-186-6929',
    appointmentDate: '11/05/2023',
  },
  {
    id: 91,
    firstName: 'Caroline',
    lastName: 'Epinoy',
    email: 'cepinoy2i@unicef.org',
    phone: '837-706-9911',
    appointmentDate: '20/05/2023',
  },
  {
    id: 92,
    firstName: 'Tarrance',
    lastName: 'MacGowan',
    email: 'tmacgowan2j@symantec.com',
    phone: '470-230-4712',
    appointmentDate: '31/08/2023',
  },
  {
    id: 93,
    firstName: 'Glad',
    lastName: 'Harbage',
    email: 'gharbage2k@dot.gov',
    phone: '921-962-6247',
    appointmentDate: '26/12/2022',
  },
  {
    id: 94,
    firstName: 'Ursola',
    lastName: 'Dobbyn',
    email: 'udobbyn2l@census.gov',
    phone: '889-463-2686',
    appointmentDate: '13/08/2023',
  },
  {
    id: 95,
    firstName: 'Farlay',
    lastName: 'Bolzen',
    email: 'fbolzen2m@quantcast.com',
    phone: '432-136-3595',
    appointmentDate: '06/07/2023',
  },
  {
    id: 96,
    firstName: 'Greg',
    lastName: 'Dayne',
    email: 'gdayne2n@theatlantic.com',
    phone: '678-129-9592',
    appointmentDate: '19/06/2023',
  },
  {
    id: 97,
    firstName: 'Tomlin',
    lastName: 'Brim',
    email: 'tbrim2o@nydailynews.com',
    phone: '200-159-0551',
    appointmentDate: '08/12/2022',
  },
  {
    id: 98,
    firstName: 'Carmon',
    lastName: 'Crotch',
    email: 'ccrotch2p@plala.or.jp',
    phone: '970-465-5689',
    appointmentDate: '23/12/2022',
  },
  {
    id: 99,
    firstName: 'Giulio',
    lastName: 'Bosche',
    email: 'gbosche2q@usgs.gov',
    phone: '913-539-9268',
    appointmentDate: '10/04/2023',
  },
  {
    id: 100,
    firstName: 'Arie',
    lastName: 'Browse',
    email: 'abrowse2r@icio.us',
    phone: '240-133-9211',
    appointmentDate: '14/12/2022',
  },
]

export const lineChartData = [
  {
    id: 1,
    month: 'January',
    amount: 100,
  },
  {
    id: 2,
    month: 'February',
    amount: 105,
  },
  {
    id: 3,
    month: 'March',
    amount: 72,
  },
  {
    id: 4,
    month: 'April',
    amount: 36,
  },
  {
    id: 5,
    month: 'May',
    amount: 27,
  },
  {
    id: 6,
    month: 'June',
    amount: 89,
  },
  {
    id: 7,
    month: 'July',
    amount: 110,
  },
  {
    id: 8,
    month: 'August',
    amount: 80,
  },
  {
    id: 9,
    month: 'September',
    amount: 70,
  },
  {
    id: 10,
    month: 'October',
    amount: 90,
  },
  {
    id: 11,
    month: 'November',
    amount: 120,
  },

  {
    id: 12,
    month: 'December',
    amount: 50,
  },
]

//  export const cardOneList = [
//    {
//      id: 1,
//      name: 'Total Number of Accounts',
//      // count: `${value}`,
//      count: data.totalAccount,
//      color: 'green',
//    },
//    {
//      id: 2,
//      name: '',
//      count: 300,
//      color: 'blue',
//    },
//    {
//      id: 3,
//      name: '',
//      count: 200,
//      color: 'red',
//    },
//    {
//      id: 4,
//      name: '',
//      count: 100,
//      color: '#F3BA2F',
//    },
//  ]



const Dashboard = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

 
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:7000/api/v1/dashboard/card_values'
        )
        setData(response.data.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Call the async function to fetch data
    fetchData()
  }, [data]) // The empty dependency array [] ensures that this effect runs only once after initial render

   const cardOneList = [
     {
       id: 1,
       name: 'Total Number of Accounts',
       // count: `${value}`,
       count: `${data.totalAccount}`,
       color: '#009933',
     },
     {
       id: 2,
       name: 'Accounts Registered this Month',
       count: `${data.totalAccount}`,
       color: '#009933',
     },
     {
       id: 3,
       name: 'Total Number of Bookings',
       count: `${data.totalAccount}`,
       color: '#009933',
     },
     {
       id: 4,
       name: 'Bookings Registered this Month',
       count: `${data.totalAccount}`,
       color: '#009933',
     },
   ]

 console.log(data);
  const [chartData, setChartData] = useState({
    labels: lineChartData.map((data) => data.month.substring(0, 3)),
    datasets: [
      {
        label: 'Yearly Report',
        data: lineChartData.map((data) => data.amount),
        backgroundColor: [
          'rgba(75,192,192,1)',
          //  '#ecf0f1',
          //  '#50AF95',
          //  '#f3ba2f',
          //  '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })

  const [barData, setBarData] = useState({
    labels: lineChartData.map((data) => data.month.substring(0, 3)),
    datasets: [
      {
        label: 'Yearly Report',
        data: lineChartData.map((data) => data.amount),
        backgroundColor: [
          //  'rgba(75,192,192,1)',
          //   '#ecf0f1',
          //   '#50AF95',
          //   '#f3ba2f',
          '#009933',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })
  return (
    <div className='sb-nav-fixed'>
      <DashNav />
      <div id='layoutSidenav'>
        <div id='layoutSidenav_content'>
          <main>
            <div className='container-fluid px-4'>
              <h1 className='mt-4'>Dashboard</h1>
              <ol className='breadcrumb mb-4'>
                <li className='breadcrumb-item active'>Dashboard</li>
              </ol>
              <div className='row'>
                {cardOneList.map((card) => (
                  <DashCard key={card.id} {...card} />
                ))}
                {/* <DashCard name='Total Amount' count={data.totalAccount} color="purple" /> */}
              </div>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='card mb-4'>
                    <div className='card-header'>
                      <i className='fas fa-chart-area me-1'></i>
                      Yearly Booking Metrics
                    </div>
                    <div className='card-body'>
                      {/* <canvas
                        id='myAreaChart'
                        width='100%'
                        height='40'
                      ></canvas> */}
                      <LineChart data={chartData} />
                    </div>
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='card mb-4'>
                    <div className='card-header'>
                      <i className='fas fa-chart-bar me-1'></i>
                      Monthly Booking Metrics
                    </div>
                    <div className='card-body'>
                      {/* <canvas id='myBarChart' width='100%' height='40'></canvas> */}
                      <BarChart data={barData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card mb-4'>
                <Table data={tableData} />
              </div>
            </div>
          </main>
          <footer className='py-4 bg-light mt-auto'>
            <div className='container-fluid px-4'>
              <div className='d-flex align-items-center justify-content-between small'>
                <div className='text-muted'>
                  Copyright &copy; Just Klean 2023
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

 
export default Dashboard