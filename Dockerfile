FROM node:12.14
ARG API_HOST=https://api-dot-covid-19-sos-cp-chula.appspot.com/
# ARG GA_TRACKING_CODE=UA-155372817-1

# ENV GA_TRACKING_CODE=$GA_TRACKING_CODE
ENV API_HOST=$API_HOST
WORKDIR /home/node/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
RUN yarn export


FROM nginx
LABEL MAINTAINER="Tanakorn P."
LABEL DEVELOPER=["NATTANON H.","TECHID J.","CHAVIN C.","NATTAPAT I."]

COPY --from=0 /home/node/app/out /var/www/frontend
COPY ./nginxconf/ /etc/nginx/conf.d/
RUN mkdir -p /usr/share/nginx/www/_ah && \
    echo "healthy" > /usr/share/nginx/www/_ah/health
EXPOSE 8080
