# Stage 1: Build the Spring Boot application
FROM maven:3.9.9-amazoncorretto-21 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and src directory to the working directory
COPY pom.xml ./
COPY src ./src

# Package the application into a JAR file
RUN mvn clean package -DskipTests

# Stage 2: Run the Spring Boot application
FROM amazoncorretto:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the build stage to the runtime stage
COPY --from=build /app/target/*.jar /app/*.jar

# Expose the port that the Spring Boot application will run on
EXPOSE 8080

# Define the command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/*.jar"]
