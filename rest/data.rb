require 'sinatra/base'
 
module RestAPI
	class Data < Sinatra::Base
		#Get all records
		get "/api/data" do
			usr_small = session[:usr_small]
			if session[:islogin] && usr_small != nil 
				# Create new struct from
				Data = App.struct[:DATA]
				results = []
				App.db.execute( App.query[:DATA_Q_U], [usr_small[:id]] ) do |data|
					pts = Data.new( 
							data[0],  data[1],  data[2],  data[3], 
							data[4],  data[5],  data[6],  data[7], 
							data[8],  data[9],  data[10], data[11], 
							data[12], data[13], data[14], data[15] 
					)
					results.push( pts )
				end
				json results
			end
		end

		#Get one
		get "/api/data/:id" do
			Data = App.struct[:DATA]
			pts = nil
			App.db.execute( App.query[:DATA_Q_ID], [params[:id]] ) do |data|
				pts = Data.new( 
						data[0],  data[1],  data[2],  data[3], 
						data[4],  data[5],  data[6],  data[7], 
						data[8],  data[9],  data[10], data[11], 
						data[12], data[13], data[14], data[15]
				)	
			end
			json pts
		end
	
		#Update
		put "/api/data/state/:id" do
  		data = JSON.parse request.body.read
			App.db.execute( 
				App.query[:DATA_U_STATE], 
				[
					data["stateid"], 
					params[:id]
				]	
			)
		end

		#Update
		put "/api/data/user/:id" do
  		#data = JSON.parse request.body.read
			usr_small = session[:usr_small]
			if session[:islogin] && usr_small != nil
				App.db.execute( 
					App.query[:DATA_U_USER], 
						[
							usr_small[:id], 
							params[:id]
						]
				)
			end
		end
	end
end
