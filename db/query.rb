module DB
	# Dictionary
	QUERY = {}
  STRUCT = {}
	FIELDS = [
		:MSGID,
		:ROOM,
		:SQUARE,
		:PRICE,
		:PHONE,
		:SUBWAY,
		:OTHERS,
		:LINK,
		:PAGE
	]	

	#######################################
	# Points                              #
	#######################################
	QUERY[:POINTS_Q] = "SELECT v.ID, v.POINT, v.LABEL, v.CODE, v.LOGIN, v.PWD, v.PARSER FROM V_SOURCE v;"
	QUERY[:POINTS_Q_ID] = "SELECT v.ID, v.POINT, v.LABEL, v.CODE, v.LOGIN, v.PWD, v.PARSER FROM V_SOURCE v WHERE v.ID = ?;"
	QUERY[:POINTS_I] = "INSERT INTO SOURCEDATA( POINT, LABEL, CODE, LOGIN, PWD, PARSER, STATE ) VALUES( ?, ?, ?, ?, ?, ?, 2);"
	QUERY[:POINTS_U] = "UPDATE SOURCEDATA SET POINT=?,LABEL=?,CODE=?,LOGIN=?,PWD=?,PARSER=? WHERE ID = ?;"
  QUERY[:POINTS_Q_S] = "SELECT v.ID, v.LABEL FROM V_SOURCE v;"
  QUERY[:POINTS_Q_ID_S] = "SELECT v.ID, v.LABEL FROM V_SOURCE v WHERE v.ID = ?;"
	STRUCT[:Points] = Struct.new( :id, :point, :label, :code, :login, :pwd, :parser )
	STRUCT[:Points_S] = Struct.new( :id, :label )

	#######################################
	# Message                             #
	#######################################
	STRUCT[:Message] = Struct.new( :type, :message, :trace )

	#######################################
	# Message                             #
	#######################################
	STRUCT[:PTime] = Struct.new( :id, :timeplan, :type )
	QUERY[:PTIME_Q] = "SELECT s.ID, s.TIMEPLAN, s.TYPE FROM SCHEDULE s;"
	QUERY[:PTIME_Q_ID] = "SELECT s.ID, s.TIMEPLAN, s.TYPE FROM SCHEDULE s WHERE s.ID = ?;"
	QUERY[:PTIME_U] = "UPDATE SCHEDULE SET TIMEPLAN = ? WHERE ID = ?;"
	
	#######################################
	# Journal                             #
	#######################################
	STRUCT[:JOURNAL_S] = Struct.new( :id, :operdate, :line )
	STRUCT[:JOURNAL_I] = Struct.new( :line )
	STRUCT[:JOURNAL_U] = Struct.new( :id, :line )
	QUERY[:JOURNAL_Q] = "SELECT s.ID, s.OPERDATE, s.LINE FROM RAJournal s;"
	QUERY[:JOURNAL_Q_ID] = "SELECT s.ID, s.OPERDATE, s.LINE FROM RAJournal s WHERE s.ID = ?;"
	QUERY[:JOURNAL_U] = "UPDATE RAJournal SET LINE = ? WHERE ID = ?;"
	QUERY[:JOURNAL_D] = "DELETE RAJournal WHERE ID = ?;"
	QUERY[:JOURNAL_I] = "INSERT INTO RAJournal ( LINE ) VALUES( ? );"

	#######################################
	# Data                                #
	#######################################
	STRUCT[:DATA] = Struct.new(
		:id,    :msgid,  :room,     :square,
		:price, :phone,  :subway,   :others,
		:link,	:page,   :operdate, :source,
		:user,	:userid, :state,    :stateid	
	)
	STRUCT[:DATA_ID] = Struct.new( :id )
	QUERY[:DATA_Q] = "SELECT s.ID,s.MSGID,s.ROOM,s.SQUARE,s.PRICE,s.PHONE,s.SUBWAY,s.OTHERS,s.LINK,s.PAGE,s.OPERDATE,s.SOURCE,s.USER,s.USERID,s.STATE,s.STATEID FROM V_Data s;"
	QUERY[:DATA_Q_U] = "SELECT s.ID,s.MSGID,s.ROOM,s.SQUARE,s.PRICE,s.PHONE,s.SUBWAY,s.OTHERS,s.LINK,s.PAGE,s.OPERDATE,s.SOURCE,s.USER,s.USERID,s.STATE,s.STATEID FROM V_Data s WHERE s.USERID IN ( 1, ?);"
	QUERY[:DATA_Q_ID] = "SELECT s.ID,s.MSGID,s.ROOM,s.SQUARE,s.PRICE,s.PHONE,s.SUBWAY,s.OTHERS,s.LINK,s.PAGE,s.OPERDATE,s.SOURCE,s.USER,s.USERID,s.STATE,s.STATEID FROM V_Data s WHERE s.ID = ?;"
	QUERY[:DATA_U_STATE] = "UPDATE RAData SET STATE = ? WHERE ID = ?;"
	QUERY[:DATA_U_USER] = "UPDATE RAData SET USER = ? WHERE ID = ?;"
	QUERY[:DATA_Q_CHK] = "SELECT COUNT(s.MSGID )FROM RAMSGID s WHERE s.MSGID = ? AND s.SOURCE = ?;"
	QUERY[:DATA_Q_LIM1] = "SELECT v.ID FROM V_DATA_ID v WHERE v.USERID IN ( 1, ? ) LIMIT ? ;"
	QUERY[:DATA_Q_LIM2] = "SELECT v.ID FROM V_DATA_ID v WHERE v.USERID IN ( 1, ? ) LIMIT ? OFFSET ?;"

	#######################################
	# STATE                               #
	#######################################
	STRUCT[:STATE] = Struct.new( :id, :name )
	QUERY[:STATE_Q] = "SELECT v.ID, v.DESC FROM V_STATE v;"
	QUERY[:STATE_Q_ID] = "SELECT v.ID, v.DESC FROM V_STATE v WHERE v.ID = ?;"
	
  #######################################
	# AUTH                                #
	#######################################
	STRUCT[:AUTH_S] = Struct.new( :id, :fio )
	QUERY[:AUTH_Q_S] = "SELECT v.ID, v.FIO FROM V_SMALL_USER v WHERE v.LOGIN = ? AND v.PWD = ?;"
	QUERY[:AUTH_I] = "INSERT INTO RAUsers u( LOGIN, NAME, SECONDNAME,  LASTNAME, PWD ) VALUES( ?,?,?,?,?);"
	
  #######################################
	# WP                                  #
	#######################################
	STRUCT[:USER_WP] = Struct.new( :id, :wp )
	QUERY[:WP_LIST] = "SELECT v.ID, v.NAME AS WP FROM V_WorkPlace v;"
	QUERY[:USER_WP_LIST] = "SELECT v.ID, v.WP FROM V_User_wp v WHERE v.USERID = ?;"
	QUERY[:USER_WP_Q] = "SELECT v.ID, v.WP FROM V_User_wp v WHERE v.USERID = ? AND v.ID = ?;"
	QUERY[:USER_WP_COUNT] = "SELECT COUNT(v.ID) FROM V_User_wp v WHERE v.USERID = ?;"

  #######################################
	# Black List                          #
	#######################################
	STRUCT[:BLACK] = Struct.new( :id, :phone, :state, :stateid )
	QUERY[:BLACK_LIST_Q] = "SELECT v.ID, v.PHONE, v.STATE, v.STATEID FROM V_BlackList v;"
	QUERY[:BLACK_LIST_STATE_U] = "UPDATE RABlackList r SET r.STATE = ? WHERE r.ID = ?;"
	QUERY[:BLACK_LIST_PHONE_U] = "UPDATE RABlackList r SET r.PHONE = ? WHERE r.ID = ?;"
	QUERY[:BLACK_LIST_I] = "INSERT INTO RABlackList ( PHONE, STATE ) VALUES( ?, 2 );"
	# Black List Rules
	STRUCT[:BLACK] = Struct.new( :id, :rule, :state, :stateid )
	QUERY[:BLACK_LIST_RULE_Q] = "SELECT v.ID, v.RULE, v.STATE, v.STATEID FROM V_BlackList_Rule v;"
	QUERY[:BLACK_LIST_RULE_STATE_U] = "UPDATE RABlackListRule SET STATE = ? WHERE ID = ?;"
	QUERY[:BLACK_LIST_RULE_U] = "UPDATE RABlackListRule SET RULE = ? WHERE ID = ?;"
	QUERY[:BLACK_LIST_I] = "INSERT INTO RABlackListRule ( RULE, STATE ) VALUES ( ?, 2 );"

	#######################################
	# Users list                          #
	#######################################
	QUERY[:USERS_Q_ALL] = "SELECT u.ID, u.NAME, u.SECONDNAME, u.LASTNAME, u.LOGIN, u.OPERDATE, u.STATE, u.STATEID FROM V_USERS u;"
	QUERY[:USERS_Q] = "SELECT u.ID, u.NAME, u.SECONDNAME, u.LASTNAME, u.LOGIN, u.OPERDATE, u.STATE, u.STATEID FROM V_USERS u WHERE u.ID = ?;"
	QUERY[:USERS_Q_IDX] = "SELECT u.ID, u.NAME, u.SECONDNAME, u.LASTNAME, u.LOGIN, u.OPERDATE, u.STATE, u.STATEID FROM V_USERS u WHERE u.LOGIN = ?;"
	QUERY[:USERS_I] = "INSERT INTO RAUsers ( NAME, SECONDNAME, LASTNAME, LOGIN, STATE, PWD ) VALUES( ?,?,?,?,2, 'qw12er34' );"
	QUERY[:USERS_U] = "UPDATE RAUsers SET NAME = ?, SECONDNAME = ?, LASTNAME = ?, LOGIN = ? WHERE ID = ?;"
	QUERY[:USERS_STATE_U] = "UPDATE RAUsers SET STATE = ? WHERE ID = ?;"
			 
	STRUCT[:USERS] = Struct.new( :id, :name, :secondname, :lastname, :login, :operdate, :state, :stateid )
	QUERY[:USERS_QI] = "SELECT u.ID, u.NAME, u.SECONDNAME, u.LASTNAME, u.LOGIN, u.OPERDATE, u.STATE, u.STATEID FROM V_USERS u;"





	#######################################
	# Interfaces                          #
	#######################################

	def DB.Query
		return QUERY
	end

	def DB.Struct
		return STRUCT
	end

	def DB.Fields
		return FIELDS
	end
end
