const drivers = [
    {
    "id": "1",
    "name": "Lewis Hamilton",
    "number": 44,
    "team": "Mercedes",
    "country": "United Kingdom",
    "dob": "01/07/1985",
    "pob": "Stevenage. England",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/hamilton.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvaGFtaWx0b24ucG5nIiwiaWF0IjoxNjQ4MDYzNjA5LCJleHAiOjE5NjM0MjM2MDl9.s-ymo0b9xrrUF-4vO9cWHI0ARA07g9e8EB8F2xDutDA"
    },
    {
    "id": "2",
    "name": "George Russell",
    "number": 63,
    "team": "Mercedes",
    "country": "United Kingdom",
    "dob": "02/15/1998",
    "pob": "Kings Lynn, England",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/russell.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvcnVzc2VsbC5wbmciLCJpYXQiOjE2NDgwNjM4MDYsImV4cCI6MTk2MzQyMzgwNn0.0CBG1Vb_BFyRGN07x7zW4UH5Zvnh0EKpCyZ0nAnNF0U"
    },
    {
    "id": "3",
    "name": "Max Verstappen",
    "number": 1,
    "team": "Red Bull",
    "country": "Netherlands",
    "dob": "09/30/1997",
    "pob": "Hasselt, Belgium",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/verstappen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvdmVyc3RhcHBlbi5wbmciLCJpYXQiOjE2NDgwNjM4NzYsImV4cCI6MTk2MzQyMzg3Nn0.MExJGtTA5alrZCrA736P6k2OsnLswC3PuQm_RqpOpI8"
    },
    {
    "id": "4",
    "name": "Sergio P√©rez",
    "number": 11,
    "team": "Red Bull",
    "country": "Mexico",
    "dob": "01/26/1990",
    "pob": "Guadalajara,Mexico",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/perez.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvcGVyZXoucG5nIiwiaWF0IjoxNjQ4MDYzNzc1LCJleHAiOjE5NjM0MjM3NzV9.SFMUZn8WMe5Dini013teMWrkRw7-Bop-zLom05trAYU"
    },
    {
    "id": "5",
    "name": "Charles Leclerc",
    "number": 16,
    "team": "Ferrari",
    "country": "Monaco",
    "dob": "10/16/1997",
    "pob": "Monte Carlo, Monaco",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/leclerc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbGVjbGVyYy5wbmciLCJpYXQiOjE2NDgwNjM2NDYsImV4cCI6MTk2MzQyMzY0Nn0.xcdDMdd0F1Em7c0FOwX1fn1XQO7Pfsci12Q41GsvmPs"
    },
    {
    "id": "6",
    "name": "Carlos Sainz",
    "number": 55,
    "team": "Ferrari",
    "country": "Spain",
    "dob": "09/01/1994",
    "pob": "Madid, Spain",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/sainz.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvc2FpbnoucG5nIiwiaWF0IjoxNjQ4MDYzODIyLCJleHAiOjE5NjM0MjM4MjJ9.bNps13e5WeL2XdY2-6O5B_m8kCXU0INEocQ3ZWCJBYU"
    },
    {
    "id": "7",
    "name": "Daniel Ricciardo",
    "number": 3,
    "team": "McLaren",
    "country": "Australia",
    "dob": "07/01/1989",
    "pob": "Perth, Australia",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/ricciardo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvcmljY2lhcmRvLnBuZyIsImlhdCI6MTY0ODA2Mzc4OSwiZXhwIjoxOTYzNDIzNzg5fQ.ZZQgJwJS54WwnrGUwSFVpLZXg2FsnczRYuvWEAttVHs"
    },
    {
    "id": "8",
    "name": "Lando Norris",
    "number": 4,
    "team": "McLaren",
    "country": "United Kingdom",
    "dob": "11/13/1999",
    "pob": "Bristol, England",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/norris.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbm9ycmlzLnBuZyIsImlhdCI6MTY0ODA2MzY5MywiZXhwIjoxOTYzNDIzNjkzfQ.UXGphMF9owOkU1xIkXMBwp3IHRlmueoLvnyALi9qPF4"
    },
    {
    "id": "9",
    "name": "Sebastian Vettel",
    "number": 27,
    "team": "Aston Martin",
    "country": "Germany",
    "dob": "07/03/1987",
    "pob": "Heppenheim, Germany",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/vettel.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvdmV0dGVsLnBuZyIsImlhdCI6MTY0ODA2Mzg4OSwiZXhwIjoxOTYzNDIzODg5fQ._3uP5eaXClQJ6y_sl6i1sg6vI5INwdNzs78qHGQwIho"
    },
    {
    "id": "10",
    "name": "Lance Stroll",
    "number": 18,
    "team": "Aston Martin",
    "country": "Canada",
    "dob": "10/29/1998",
    "pob": "Montreal, Canada",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/stroll.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvc3Ryb2xsLnBuZyIsImlhdCI6MTY0ODA2Mzg0OSwiZXhwIjoxOTYzNDIzODQ5fQ.kG3udpB3KROkg4H7zvmwzks60YtwWFSMbPcXBgWYZk4"
    },
    {
    "id": "11",
    "name": "Yuki Tsunoda",
    "number": 22,
    "team": "AlphaTauri",
    "country": "Japan",
    "dob": "05/11/2000",
    "pob": "Sagamihara, Japan",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/tsunoda.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvdHN1bm9kYS5wbmciLCJpYXQiOjE2NDgwNjM4NjIsImV4cCI6MTk2MzQyMzg2Mn0.YWlf0oiK0tgrCnlNNRT28jtIqWan_JYAVBX9WLnCqFk"
    },
    {
    "id": "12",
    "name": "Pierre Gasly",
    "number": 10,
    "team": "AlphaTauri",
    "country": "France",
    "dob": "02/07/1996",
    "pob": "Rouen, France",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/gasly.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvZ2FzbHkucG5nIiwiaWF0IjoxNjQ4MDYzNTc2LCJleHAiOjE5NjM0MjM1NzZ9.bPkj7bC5Sa6j7h-jf_HQAK-IrPdlzyPkLYYK_M6UBS8"
    },
    {
    "id": "13",
    "name": "Fernando Alonso",
    "number": 14,
    "team": "Alpine F1 Team",
    "country": "Spain",
    "dob": "07/29/1981",
    "pob": "Oviedo, Spain",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/alonso.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvYWxvbnNvLnBuZyIsImlhdCI6MTY0ODA2MzUzMiwiZXhwIjoxOTYzNDIzNTMyfQ.cvzZ_S4NKFkbN3Jxvs7TbmG-0xVpNGE0XMAbsrVv9y8"
    },
    {
    "id": "14",
    "name": "Esteban Ocon",
    "number": 31,
    "team": "Alpine F1 Team",
    "country": "France",
    "dob": "09/17/1996",
    "pob": "Evreux, Normandy",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/ocon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvb2Nvbi5wbmciLCJpYXQiOjE2NDgwNjM3NTUsImV4cCI6MTk2MzQyMzc1NX0.8fqKj4fnrLEsGWATZGUunu2GInQEjEi8bYB_uUsTHpM"
    },
    {
    "id": "15",
    "name": "Valtteri Bottas",
    "number": 77,
    "team": "Alfa Romeo",
    "country": "Finland",
    "dob": "08/28/1989",
    "pob": "Nastola, Finland",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/bottas.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvYm90dGFzLnBuZyIsImlhdCI6MTY0ODA2MzU1NywiZXhwIjoxOTYzNDIzNTU3fQ.fJiyDOFOlUrF-h620zzk0RCMtgc4ZYra_2OQUgd4RcQ"
    },
    {
    "id": "16",
    "name": "Guanyu Zhou",
    "number": 24,
    "team": "Alfa Romeo",
    "country": "China",
    "dob": "05/30/1999",
    "pob": "Shanghai, China",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/guanyu.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvZ3Vhbnl1LnBuZyIsImlhdCI6MTY0ODA2MzU4MywiZXhwIjoxOTYzNDIzNTgzfQ.khnG031OuZx6QekG9fX-mpofm5caOr_XtS4bbHhwzcg"
    },
    {
    "id": "17",
    "name": "Alexander Albon",
    "number": 23,
    "team": "Williams",
    "country": "Thailand",
    "dob": "03/23/1996",
    "pob": "London, England",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/albon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvYWxib24ucG5nIiwiaWF0IjoxNjQ4MDYzNTEyLCJleHAiOjE5NjM0MjM1MTJ9.ZThcgkxs67_azkds22cByPHMO_5KOYYYwvQj0UFE0w0"
    },
    {
    "id": "18",
    "name": "Nicholas Latifi",
    "number": 6,
    "team": "Williams",
    "country": "Canada",
    "dob": "06/29/1995",
    "pob": "Montreal, Canada",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/latifi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbGF0aWZpLnBuZyIsImlhdCI6MTY0ODA2MzYyNiwiZXhwIjoxOTYzNDIzNjI2fQ.WSYS5ibwp-G2OCRvOgXIAEEcjkz501CD2Xjf3kYSCEk"
    },
    {
    "id": "19",
    "name": "Kevin Magnussen",
    "number": 20,
    "team": "Haas F1 Team",
    "country": "Denmark",
    "dob": "10/05/1992",
    "pob": "Roskilde, Denmark",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/magnussen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbWFnbnVzc2VuLnBuZyIsImlhdCI6MTY0ODA2MzY3MiwiZXhwIjoxOTYzNDIzNjcyfQ._QNBiIxMuIbBjbKlCi5MiasXnyaMXPgiWPv8peFHeo0"
    },
    {
    "id": "20",
    "name": "Mick Schumacher",
    "number": 47,
    "team": "Haas F1 Team",
    "country": "Germany",
    "dob": "03/22/1999",
    "pob": "Vufflens-le-Chateau, Switzerland",
    "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/schumacher.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvc2NodW1hY2hlci5wbmciLCJpYXQiOjE2NDgwNjM4MzYsImV4cCI6MTk2MzQyMzgzNn0.TT6NMnFEPr9h03YCd4QL_MZdhv5wOW01iOczYikn2Vw"
    }
    ]

module.exports = { drivers };