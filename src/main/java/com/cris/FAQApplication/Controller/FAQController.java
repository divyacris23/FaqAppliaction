package com.cris.FAQApplication.Controller;
import com.cris.FAQApplication.Configurationapp;
import org.springframework.stereotype.Controller;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

@Controller
public class FAQController {

    @GetMapping("/faq")
    public String showFaqPage() {
        return "device/boot";
    }

    public class WebInitializer implements WebApplicationInitializer {
        public void onStartup(ServletContext container) throws ServletException {

            AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();

            ctx.register(Configurationapp.class);

            container.addListener(new ContextLoaderListener(ctx));

            ServletRegistration.Dynamic servlet = container.addServlet(
                    "dispatcher", new DispatcherServlet(ctx));
            servlet.setLoadOnStartup(1);
            servlet.addMapping("/");
        }
    }
}
