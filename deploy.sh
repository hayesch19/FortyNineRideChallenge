dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t fortynineridechallenge-image ./bin/release/netcoreapp2.2/publish

docker tag fortynineridechallenge-image registry.heroku.com/fortynineridechallenge/web

docker push registry.heroku.com/fortynineridechallenge/web

heroku container:release web -a fortynineridechallenge

# sudo chmod 755 deploy.sh
# ./deploy.sh