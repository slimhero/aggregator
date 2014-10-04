require 'sinatra/base'
module RestAPI
	class User < Sinatra::Base
		get "/api/user" do
			result = []
		  usr_small = session[:usr_small]
		  if session[:islogin] && usr_small != nil
				result.push( usr_small )
			end	
			json result
		end
	end
end
