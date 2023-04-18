package mx.utez.edu.Concesionaria2.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableMongoRepositories(basePackages = "mx.utez.edu.Concesionaria2.repository")
public class ConfiguracionMongoDB {

    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create("mongodb://localhost:27017/Concesionaria");
    }

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongoClient(), "Concesionaria");
    }

    @Configuration
    public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                    .allowedOrigins("*")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD")
                    .allowCredentials(false)
                    .maxAge(3600);
        }
    }

}
