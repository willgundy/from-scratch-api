-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists drivers;

CREATE table drivers (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    number INT NOT NULL,
    team VARCHAR NOT NULL,
    country VARCHAR NOT NULL,
    dob VARCHAR NOT NULL,
    pob VARCHAR NOT NULL,
    picture VARCHAR NOT NULL
);

INSERT INTO drivers (name, number, team, country, dob, pob, picture) VALUES
('Lewis Hamilton', 44, 'Mercedes', 'United Kingdom', '01/07/1985', 'Stevenage. England', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/hamilton.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvaGFtaWx0b24ucG5nIiwiaWF0IjoxNjQ4MDYzNjA5LCJleHAiOjE5NjM0MjM2MDl9.s-ymo0b9xrrUF-4vO9cWHI0ARA07g9e8EB8F2xDutDA'),
('George Russell', 63, 'Mercedes', 'United Kingdom', '02/15/1998', 'Kings Lynn, England', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/russell.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvcnVzc2VsbC5wbmciLCJpYXQiOjE2NDgwNjM4MDYsImV4cCI6MTk2MzQyMzgwNn0.0CBG1Vb_BFyRGN07x7zW4UH5Zvnh0EKpCyZ0nAnNF0U'),
('Max Verstappen', 1, 'Red Bull', 'Netherlands', '09/30/1997', 'Hasselt, Belgium', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/verstappen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvdmVyc3RhcHBlbi5wbmciLCJpYXQiOjE2NDgwNjM4NzYsImV4cCI6MTk2MzQyMzg3Nn0.MExJGtTA5alrZCrA736P6k2OsnLswC3PuQm_RqpOpI8'),
('Sergio P√©rez', 11, 'Red Bull', 'Mexico', '01/26/1990', 'Guadalajara,Mexico', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/perez.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvcGVyZXoucG5nIiwiaWF0IjoxNjQ4MDYzNzc1LCJleHAiOjE5NjM0MjM3NzV9.SFMUZn8WMe5Dini013teMWrkRw7-Bop-zLom05trAYU'),
('Charles Leclerc', 16, 'Ferrari', 'Monaco', '10/16/1997', 'Monte Carlo, Monaco', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/leclerc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbGVjbGVyYy5wbmciLCJpYXQiOjE2NDgwNjM2NDYsImV4cCI6MTk2MzQyMzY0Nn0.xcdDMdd0F1Em7c0FOwX1fn1XQO7Pfsci12Q41GsvmPs'),
('Carlos Sainz', 55, 'Ferrari', 'Spain', '09/01/1994', 'Madid, Spain', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/sainz.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvc2FpbnoucG5nIiwiaWF0IjoxNjQ4MDYzODIyLCJleHAiOjE5NjM0MjM4MjJ9.bNps13e5WeL2XdY2-6O5B_m8kCXU0INEocQ3ZWCJBYU'),
('Daniel Ricciardo', 3, 'McLaren', 'Australia', '07/01/1989', 'Perth, Australia', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/ricciardo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvcmljY2lhcmRvLnBuZyIsImlhdCI6MTY0ODA2Mzc4OSwiZXhwIjoxOTYzNDIzNzg5fQ.ZZQgJwJS54WwnrGUwSFVpLZXg2FsnczRYuvWEAttVHs'),
('Lando Norris', 4, 'McLaren', 'United Kingdom', '11/13/1999', 'Bristol, England', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/norris.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbm9ycmlzLnBuZyIsImlhdCI6MTY0ODA2MzY5MywiZXhwIjoxOTYzNDIzNjkzfQ.UXGphMF9owOkU1xIkXMBwp3IHRlmueoLvnyALi9qPF4'),
('Sebastian Vettel', 27, 'Aston Martin', 'Germany', '07/03/1987', 'Heppenheim, Germany', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/vettel.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvdmV0dGVsLnBuZyIsImlhdCI6MTY0ODA2Mzg4OSwiZXhwIjoxOTYzNDIzODg5fQ._3uP5eaXClQJ6y_sl6i1sg6vI5INwdNzs78qHGQwIho'),
('Lance Stroll', 18, 'Aston Martin', 'Canada', '10/29/1998', 'Montreal, Canada', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/stroll.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvc3Ryb2xsLnBuZyIsImlhdCI6MTY0ODA2Mzg0OSwiZXhwIjoxOTYzNDIzODQ5fQ.kG3udpB3KROkg4H7zvmwzks60YtwWFSMbPcXBgWYZk4'),
('Yuki Tsunoda', 22, 'AlphaTauri', 'Japan', '05/11/2000', 'Sagamihara, Japan', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/tsunoda.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvdHN1bm9kYS5wbmciLCJpYXQiOjE2NDgwNjM4NjIsImV4cCI6MTk2MzQyMzg2Mn0.YWlf0oiK0tgrCnlNNRT28jtIqWan_JYAVBX9WLnCqFk'),
('Pierre Gasly', 10, 'AlphaTauri', 'France', '02/07/1996', 'Rouen, France', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/gasly.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvZ2FzbHkucG5nIiwiaWF0IjoxNjQ4MDYzNTc2LCJleHAiOjE5NjM0MjM1NzZ9.bPkj7bC5Sa6j7h-jf_HQAK-IrPdlzyPkLYYK_M6UBS8'),
('Fernando Alonso', 14, 'Alpine F1 Team', 'Spain', '07/29/1981', 'Oviedo, Spain', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/alonso.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvYWxvbnNvLnBuZyIsImlhdCI6MTY0ODA2MzUzMiwiZXhwIjoxOTYzNDIzNTMyfQ.cvzZ_S4NKFkbN3Jxvs7TbmG-0xVpNGE0XMAbsrVv9y8'),
('Esteban Ocon', 31, 'Alpine F1 Team', 'France', '09/17/1996', 'Evreux, Normandy', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/ocon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvb2Nvbi5wbmciLCJpYXQiOjE2NDgwNjM3NTUsImV4cCI6MTk2MzQyMzc1NX0.8fqKj4fnrLEsGWATZGUunu2GInQEjEi8bYB_uUsTHpM'),
('Valtteri Bottas', 77, 'Alfa Romeo', 'Finland', '08/28/1989', 'Nastola, Finland', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/bottas.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvYm90dGFzLnBuZyIsImlhdCI6MTY0ODA2MzU1NywiZXhwIjoxOTYzNDIzNTU3fQ.fJiyDOFOlUrF-h620zzk0RCMtgc4ZYra_2OQUgd4RcQ'),
('Guanyu Zhou', 24, 'Alfa Romeo', 'China', '05/30/1999', 'Shanghai, China', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/guanyu.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvZ3Vhbnl1LnBuZyIsImlhdCI6MTY0ODA2MzU4MywiZXhwIjoxOTYzNDIzNTgzfQ.khnG031OuZx6QekG9fX-mpofm5caOr_XtS4bbHhwzcg'),
('Alexander Albon', 23, 'Williams', 'Thailand', '03/23/1996', 'London, England', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/albon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvYWxib24ucG5nIiwiaWF0IjoxNjQ4MDYzNTEyLCJleHAiOjE5NjM0MjM1MTJ9.ZThcgkxs67_azkds22cByPHMO_5KOYYYwvQj0UFE0w0'),
('Nicholas Latifi', 6, 'Williams', 'Canada', '06/29/1995', 'Montreal, Canada', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/latifi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbGF0aWZpLnBuZyIsImlhdCI6MTY0ODA2MzYyNiwiZXhwIjoxOTYzNDIzNjI2fQ.WSYS5ibwp-G2OCRvOgXIAEEcjkz501CD2Xjf3kYSCEk'),
('Kevin Magnussen', 20, 'Haas F1 Team', 'Denmark', '10/05/1992', 'Roskilde, Denmark', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/magnussen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvbWFnbnVzc2VuLnBuZyIsImlhdCI6MTY0ODA2MzY3MiwiZXhwIjoxOTYzNDIzNjcyfQ._QNBiIxMuIbBjbKlCi5MiasXnyaMXPgiWPv8peFHeo0'),
('Mick Schumacher', 47, 'Haas F1 Team', 'Germany', '03/22/1999', 'Vufflens-le-Chateau, Switzerland', 'https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/schumacher.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvc2NodW1hY2hlci5wbmciLCJpYXQiOjE2NDgwNjM4MzYsImV4cCI6MTk2MzQyMzgzNn0.TT6NMnFEPr9h03YCd4QL_MZdhv5wOW01iOczYikn2Vw');

