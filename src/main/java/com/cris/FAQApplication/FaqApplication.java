package com.cris.FAQApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesViewResolver;

import java.util.concurrent.TimeUnit;


@SpringBootApplication
public class FaqApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(FaqApplication.class, args);
	}

	 /* @Bean
	  public TilesConfigurer tilesConfigurer(){ TilesConfigurer
	  tilesConfigurer = new TilesConfigurer(); tilesConfigurer.setDefinitions(new
	  String[] {"/WEB-INF/tiles/faq-tiles.xml"});
	  System.out.println("tiles");
	  tilesConfigurer.setCheckRefresh(true); return tilesConfigurer; }

	 @Override
	  public void configureViewResolvers(ViewResolverRegistry registry) {
	  TilesViewResolver viewResolver = new TilesViewResolver();
	  registry.viewResolver(viewResolver);

	  }
@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("../resources/**").addResourceLocations("/resources/").setCacheControl(CacheControl.maxAge(2, TimeUnit.DAYS));
	}
*/

}
