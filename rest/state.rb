require 'sinatra/base'
module RestAPI
	class State < Sinatra::Base
		get "/api/state" do
			State = App.struct[:STATE]
			result = []
			App.db.execute( App.query[:STATE_Q] ) do |data|
				pts = State.new( data[0], data[1] )
				result.push( pts )
			end	
			json result
		end

		get "/api/state/:id" do
			State = App.struct[:STATE]
			pts = nil
			App.db.execute( App.query[:STATE_Q_ID], [params[:id]] ) do |data|
				pts = State.new( data[0], data[1] )
			end
			json pts
		end

	end
end
