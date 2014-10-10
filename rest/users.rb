require 'sinatra/base'
module RestAPI
	class Users < Sinatra::Base
		# Return all users
		get "/api/users" do
			result = []
		  usr_small = session[:usr_small]
		  if session[:islogin] && usr_small != nil
				Users = App.struct[:USERS]
				App.db.execute( App.query[:USERS_Q_ALL] ) do |data|
					pts = Users.new( data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7] )
					result.push( pts )
				end
			end	
			json result
		end

		# Return on user
		get "/api/users/:id" do
			result = []
		  usr_small = session[:usr_small]
		  if session[:islogin] && usr_small != nil
				Users = App.struct[:USERS]
				App.db.execute( App.query[:USERS_Q], [params[:id]] ) do |data|
					pts = Users.new( data[0], data[1], data[2], data[3], data[5], data[6], data[7] )
					result.push( pts )
				end
			end	
			json result
		end


		# Create new user
		post "/api/users/:id" do
			data = JSON.parse request.body.read
		  usr_small = session[:usr_small]
		  if session[:islogin] && usr_small != nil
				App.db.execute( 
					App.query[:USERS_I],
					[
						data["name"],
						data["secondname"],
						data["lastname"],
						data["login"]
					] 	
				) 
			end	
		end

		
		# Updata user data
		put "/api/users/:id" do
			data = JSON.parse request.body.read
		  usr_small = session[:usr_small]
		  if session[:islogin] && usr_small != nil
				App.db.execute( 
					App.query[:USERS_U],
				  [
						data["name"],
						data["secondname"],
						data["lastname"],
						data["login"]
					]	
				)
			end	
		end


		# Updata user state
		put "/api/users/state/:id" do
			data = JSON.parse request.body.read
		  usr_small = session[:usr_small]
		  if session[:islogin] && usr_small != nil
				App.db.execute( 
					App.query[:USERS_U],
				  [
						data["stateid"],
						params[:id]
					]	
				)
			end	
		end

	end
end
