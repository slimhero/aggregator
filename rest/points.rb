require 'sinatra/base'
 
module RestAPI
	class Points < Sinatra::Base
		#Get all records
		get "/api/points" do
			# Create new struct from
			Points = App.struct[:Points]
			results = []
			App.db.execute( App.query[:POINTS_Q] ) do |data|
				pts = Points.new( data[0], data[1], data[2], data[3], data[4], data[5], data[6] )
				results.push( pts )
			end
			json results
		end

		#Get one
		get "/api/points/:id" do
			Points = App.struct[:Points]
			pts = nil
			App.db.execute( App.query[:POINTS_Q_ID], [params[:id]] ) do |data|
				pts = Points.new( data[0], data[1], data[2], data[3], data[4], data[5], data[6] )
			end
			json pts
		end

		#Create new
		post "/api/points/:id" do
  		data = JSON.parse request.body.read
			App.db.execute( 
					App.query[:POINTS_I], 
					[
						data["point"], 
						data["label"], 
						data["code"], 
						data["login"], 
						data["pwd"],
						data["parser"]
					] )
		end
	
		#Update
		put "/api/points/:id" do
  		data = JSON.parse request.body.read
			puts data
			puts "\n"
			App.db.execute( 
					App.query[:POINTS_U], 
					[
						data["point"], 
						data["label"], 
						data["code"], 
						data["login"], 
						data["pwd"], 
						data["parser"],
						params[:id]
					]	)
		end

		#Delete
		delete "/api/points/:id" do
			D_POINTS = "UPDATE SOURCEDATA SET STATE = 3 WHERE ID = ?;"
			App.db.execute( D_POINTS, [params[:id]] )
		end
		
		# Trying to start test 
		post "/api/points/test/:id" do
  		data = JSON.parse request.body.read
      d = nil
		  items = nil
			begin
        # Load lib
				load File.join(File.dirname(__FILE__), "../dbparser.rb")
				# Get request params
				# script text
				txt = data["parser"]
				name = data["label"]
				# save data folder
				pathdata = "./assets/data/"+ data["code"] + "/" 
				forimg = "/data/"+ data["code"] + "/" 
				# run parser
				d = DBParser.new( params[:id], name, txt, App.db, App.query, App.fields, pathdata, forimg, true  )
				# working with response data
				items = nil
				if d.getOutput.length == 0
					items = "no trace"
				else
					items = d.getOutput
				end
				puts "\n"
				puts ".getOutput"
				puts d.getOutput
				puts "end\n"
				Message = App.struct[:Message]
			  return json Message.new( "test", "Test has done", items )	
			rescue Exception => e
				Errors = App.struct[:Message]
				return json Errors.new( "test", e.message, e.backtrace.inspect )
			end
		end

		#Get all records
		get "/api/pointsmin/" do
			# Create new struct from
			Points = App.struct[:Points_S]
			results = []
			App.db.execute( App.query[:POINTS_Q_S] ) do |data|
				pts = Points.new( data[0], data[1] )
				results.push( pts )
			end
			json results
		end

		#Get one
		get "/api/pointsmin/:id" do
			Points = App.struct[:Points_S]
			pts = nil
			App.db.execute( App.query[:POINTS_Q_ID_S], [params[:id]] ) do |data|
				pts = Points.new( data[0], data[1] )
			end
			json pts
		end

	end
end
