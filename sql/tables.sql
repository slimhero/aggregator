CREATE TABLE STATE(
      ID INTEGER NOT NULL PRIMARY KEY,
			CONST INTEGER NOT NULL UNIQUE,
      CODE TEXT NOT NULL,
			DESC DESCRIPTION
		);
;
CREATE TABLE SOURCEDATA(
			ID INTEGER NOT NULL PRIMARY KEY,
			POINT TEXT NOT NULL UNIQUE,
			LOGIN TEXT,
			PWD TEXT,
      OPERDATE TIMESTAMP DEFAULT (datetime('now')),
			STATE INTEGER, LABEL TEXT, FILEPATH TEXT, PARSER CLOB, CODE TEXT,
      FOREIGN KEY( STATE ) REFERENCES STATE(ID)
		);
;
CREATE VIEW V_SOURCE AS
    SELECT sd.ID,sd.POINT,sd.LABEL,sd.CODE,sd.LOGIN,sd.PWD, sd.PARSER FROM SourceData sd
    WHERE sd.STATE IN (
        SELECT s.ID FROM STATE s
        WHERE s.CONST != 3
      );
CREATE TABLE SCHEDULE( 
    ID INTEGER NOT NULL PRIMARY KEY,
    TIMEPLAN TEXT NOT NULL,
    DAY INTEGER, 
    TYPE INTEGER 
);
CREATE TABLE RAJOURNAL(
    ID INTEGER NOT NULL PRIMARY KEY,
    OPERDATE TIMESTAMP DEFAULT (datetime('now')),
    LINE TEXT
);
CREATE TABLE RADATA( 
    ID INTEGER NOT NULL PRIMARY KEY,
    MSGID INTEGER NOT NULL,
    ROOM INTEGER,
    SQUARE TEXT,
    PRICE TEXT,
    PHONE TEXT,
    SUBWAY TEXT,
    OTHERS CLOB,
    LINK TEXT,
    PAGE TEXT,
    SOURCE INTEGER,
    OPERDATE TIMESTAMP DEFAULT (datetime('now')),
    USER INTEGER,
    STATE INTEGER,
    FOREIGN KEY(SOURCE) REFERENCES SOURCEDATA(ID)
    FOREIGN KEY(STATE) REFERENCES STATE(ID)
);
CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE ramsgid (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    MSGID INTEGER NOT NULL,
    SOURCE INTEGER NOT NULL
);
CREATE TRIGGER T_DATA_CREATE
 AFTER
 INSERT
 ON radata
 FOR EACH ROW
BEGIN
    INSERT INTO RAMSGID( MSGID, SOURCE )
    VALUES( NEW.MSGID, NEW.SOURCE );
END;
CREATE VIEW V_STATE AS
   SELECT  ID, DESC
   FROM State s
   WHERE s.CONST != 3;
CREATE UNIQUE INDEX "IDX_STATE_CONST" on state (CONST ASC);
CREATE TABLE RAUSERS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    LOGIN TEXT NOT NULL,
    NAME TEXT NOT NULL,
    SECONDNAME TEXT,
    LASTNAME TEXT NOT NULL,
    PWD TEXT NOT NULL,
    STATE INTEGER,
    OPERDATE TIMESTAMP DEFAULT (datetime('now')),
    FOREIGN KEY(STATE) REFERENCES STATE(ID)
);
CREATE TABLE RAWorkPlace (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    NAME TEXT NOT NULL,
    DESCRIPTION TEXT,
    STATE INTEGER NOT NULL,
    FOREIGN KEY(STATE) REFERENCES STATE(ID)
 );
CREATE TABLE RAUserWorkPlace (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    USER INTEGER,
    WORKPLACE INTEGER,
    STATE INTEGER NOT NULL,
    FOREIGN KEY(STATE) REFERENCES STATE(ID)
 );
CREATE VIEW V_SMALL_USER AS
 SELECT u.ID, REPLACE( SubStr(u.NAME,1,1) || '.' || SubStr(u.SECONDNAME,1,1) || '.' || u.LASTNAME, '..', '' ) AS FIO, u.LOGIN, u.PWD 
 FROM RAUsers u;
CREATE VIEW V_DATA AS
    SELECT 
        s.ID,
	s.MSGID,
	s.ROOM,
	s.SQUARE,
	s.PRICE,
	s.PHONE,
	s.SUBWAY,
	s.OTHERS,
	s.LINK,
	s.PAGE,
	s.OPERDATE,
	src.Label AS SOURCE,
	u.FIO AS USER, 
	s.USER AS USERID, 
	st.DESC AS STATE, 
	st.ID AS STATEID 
    FROM RAData s, V_State st, V_Source src, V_Small_User u
    WHERE st.ID = s.STATE
       AND src.id = s.source
       AND u.ID = s.USER
    ORDER BY s.OPERDATE DESC;
CREATE VIEW V_WorkPlace AS
SELECT w.ID, w.NAME
FROM RAWorkPlace w, V_STATE s
WHERE w.STATE = s.ID;
CREATE VIEW V_USER_WP AS
   SELECT  wp.ID, wp.NAME AS WP, u.ID AS USERID
   FROM RAUsers u, V_WorkPlace wp, RAUserWorkPlace uwp, State st
   WHERE st.CONST != 3
     AND u.STATE =st.ID
     AND u.ID = uwp.USER
     AND wp.ID = uwp.WORKPLACE;
CREATE TABLE RABLACKLISTRULE( 
    ID INTEGER NOT NULL PRIMARY KEY,
    PARSERRULE CLOB,
    OPERDATE TIMESTAMP DEFAULT (datetime('now')),
    STATE INTEGER,
    FOREIGN KEY(STATE) REFERENCES STATE(ID)
);
CREATE TABLE RABLACKLIST( 
    ID INTEGER NOT NULL PRIMARY KEY,
    PHONE TEXT,
    OPERDATE TIMESTAMP DEFAULT (datetime('now')),
    STATE INTEGER,
    FOREIGN KEY(STATE) REFERENCES STATE(ID)
);
CREATE VIEW V_BLACKLIST_RULE AS
  SELECT
     r.ID,
     r.PARSERRULE AS RULE,
     r.STATE AS STATEID,
     s.DESC AS  STATE
  FROM RABLACKLISTRULE r, V_STATE s
  WHERE r.STATE = s.ID;
CREATE VIEW V_BLACKLIST AS
  SELECT
     r.ID,
     r.PHONE AS PHONE,
     r.STATE AS STATEID,
     s.DESC AS  STATE
  FROM RABLACKLIST r, V_STATE s
  WHERE r.STATE = s.ID;
CREATE VIEW V_USERS AS
 SELECT u.ID, u.NAME, u.SECONDNAME, u.LASTNAME, u.LOGIN, u.OPERDATE, s.DESC AS STATE, u.STATE AS STATEID
 FROM RAUsers u, State s
 WHERE u.STATE = s.ID;
CREATE UNIQUE INDEX "IDX_USERS" on rausers (LOGIN ASC)
;
CREATE VIEW V_DATA_ID AS 
  SELECT * FROM (
    SELECT 0 AS TYPE, v.ID, v.USERID, v.STATEID FROM V_DATA v WHERE v.USERID != 1
    UNION
    SELECT 1 AS TYPE, ID, USERID, STATEID FROM V_DATA WHERE USERID = 1
  ) z
  ORDER BY z.TYPE ASC, z.ID DESC;
