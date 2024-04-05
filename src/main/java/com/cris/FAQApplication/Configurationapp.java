package com.cris.FAQApplication;

import org.springframework.context.annotation.*;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.tiles3.*;

import java.util.concurrent.TimeUnit;

@Configuration
@EnableWebMvc
public class Configurationapp implements WebMvcConfigurer {
    @Bean
    public TilesConfigurer tilesConfigurer() {
        TilesConfigurer tilesConfigurer = new TilesConfigurer();
        tilesConfigurer.setDefinitions(
                new String[] {"/WEB-INF/tiles/faq-tiles.xml" });
        tilesConfigurer.setCheckRefresh(true);

        return tilesConfigurer;
    }

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        TilesViewResolver viewResolver = new TilesViewResolver();
        registry.viewResolver(viewResolver);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("../resources/**").addResourceLocations("/resources/").setCacheControl(CacheControl.maxAge(2, TimeUnit.DAYS));
    }
}