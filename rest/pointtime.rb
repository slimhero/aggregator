require 'sinatra/base'

module RestAPI
	class PointTime < Sinatra::Base
		#Get all data
		get "/api/time" do
			PTime = App.struct[:PTime]
			result = []
			App.db.execute( App.query[:PTIME_Q] ) do |data|
				pts = PTime.new( data[0], data[1], data[2] )
				result.push( pts )
			end
			json result
		end

		# Get one
		get "/api/time/:id" do
			PTime = App.struct[:PTime]
			pts = nil
			App.db.execute( App.query[:PTIME_Q_ID], [params[:id]] ) do |data|
				pts = PTime.new( data[0], data[1], data[2] )
			end
			json pts
		end	

		# Update
		put "/api/time/:id" do
			data = JSON.parse request.body.read
			puts "\n"
			puts "-> #{data["timeplan"]}"
			puts "\n"
			App.db.execute(
				App.query[:PTIME_U],
					[
						data["timeplan"],
						params[:id]
					]
			)
		end
	end
end
