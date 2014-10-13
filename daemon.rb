#!/usr/bin/env ruby

require 'rubygems'
require 'daemons'

#Daemons.run( './scheduler.rb' ) 
#Daemons.run( File.join( File.dirname(__FILE__), "./scheduler.rb" ) )
#pwd = File.dirname( File.expand_path(__FILE__) )
pwd = Dir.pwd
file = pwd + '/scheduler.rb'
puts "#{pwd}"
puts "#{file}"
Daemons.run_proc(
  'scheduler.rb', {
  :log_output => true,
	:log_dir => pwd,
	:dir => pwd,
  :backtrace => true,
	#:monitor => true,
	:dir_mode => :normal #:script
	}
) do
	#exec "ruby #{ File.join( File.dirname(__FILE__), 'scheduler.rb' ) }"
	Dir.chdir pwd #"/home/develop/Projects/agregator"
	exec "ruby #{file}"
end
