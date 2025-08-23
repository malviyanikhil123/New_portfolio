// --- Skills Data ---
const skillsData = [
     { name: 'React.js', icon: 'assets/images/skills-icon/React.png', title: 'React.js' },
     { name: 'TypeScript', icon: 'assets/images/skills-icon/typescript.png', title: 'TypeScript' },
     { name: 'JavaScript', icon: 'assets/images/skills-icon/java-script.png', title: 'JavaScript (ES6+)' },
     { name: 'HTML5', icon: 'assets/images/skills-icon/HTML5.png', title: 'HTML & CSS3' },
     { name: 'CSS3', icon: 'assets/images/skills-icon/CSS3.png', title: 'CSS3' },
     { name: 'Tailwind CSS', icon: 'assets/images/skills-icon/Tailwind CSS.png', title: 'Tailwind CSS' },
     { name: 'Node.js', icon: 'assets/images/skills-icon/Node.js.png', title: 'Node.js' },
     { name: 'Python', icon: 'assets/images/skills-icon/python.png', title: 'Python (Django, Flask)' },
     { name: 'Express.js', icon: 'assets/images/skills-icon/Express.png', title: 'Express.js & REST APIs' },
     { name: 'NestJS', icon: 'assets/images/skills-icon/Nest.js.png', title: 'NestJS & Microservices' },
     { name: 'GraphQL', icon: 'assets/images/skills-icon/GraphQL.png', title: 'GraphQL' },
     { name: 'MongoDB', icon: 'assets/images/skills-icon/MongoDB.png', title: 'MongoDB & NoSQL' },
     { name: 'PostgreSQL', icon: 'assets/images/skills-icon/PostgresSQL.png', title: 'PostgreSQL' },
     { name: 'MySQL', icon: 'assets/images/skills-icon/MySQL.png', title: 'MySQL' },
     { name: 'Redis', icon: 'assets/images/skills-icon/Redis.png', title: 'Redis' },
     { name: 'AWS', icon: 'assets/images/skills-icon/AWS.png', title: 'AWS' },
     { name: 'Azure', icon: 'assets/images/skills-icon/Azure.png', title: 'Azure' },
     { name: 'Docker', icon: 'assets/images/skills-icon/Docker.png', title: 'Docker' },
     { name: 'Kubernetes', icon: 'assets/images/skills-icon/Kubernetes.png', title: 'Kubernetes' },
     { name: 'Git', icon: 'assets/images/skills-icon/Git.png', title: 'Git' },
     { name: 'GitHub', icon: 'assets/images/skills-icon/GitHub.png', title: 'GitHub' },
     { name: 'Jenkins', icon: 'assets/images/skills-icon/Jenkins.png', title: 'Jenkins' },
     { name: 'Terraform', icon: 'assets/images/skills-icon/HashiCorp Terraform.png', title: 'HashiCorp Terraform' },
     { name: 'Ansible', icon: 'assets/images/skills-icon/Ansible.png', title: 'Ansible' },
     { name: 'Jira', icon: 'assets/images/skills-icon/Jira.png', title: 'Jira' },
     { name: 'Postman', icon: 'assets/images/skills-icon/Postman.png', title: 'Postman' },
     { name: 'Vite', icon: 'assets/images/skills-icon/Vite.js.png', title: 'Vite' },
     { name: 'Figma', icon: 'assets/images/skills-icon/Figma.png', title: 'Figma' },
     { name: 'Redux', icon: 'assets/images/skills-icon/Redux.png', title: 'Redux' },
     { name: 'Socket.io', icon: 'assets/images/skills-icon/Socket.io.png', title: 'Socket.io' },
     { name: 'Apache Kafka', icon: 'assets/images/skills-icon/Apache Kafka.png', title: 'Apache Kafka' },
     { name: 'NGINX', icon: 'assets/images/skills-icon/NGINX.png', title: 'NGINX' },
     { name: 'Grafana', icon: 'assets/images/skills-icon/Grafana.png', title: 'Grafana' },
     { name: 'Prometheus', icon: 'assets/images/skills-icon/Prometheus.png', title: 'Prometheus' },
     { name: 'Linux', icon: 'assets/images/skills-icon/Linux.png', title: 'Linux' },
     { name: 'Ubuntu', icon: 'assets/images/skills-icon/Ubuntu.png', title: 'Ubuntu' }
];

// Function to generate skill icons dynamically
function generateSkillIcons() {
     const scrollerInner = document.querySelector('.scroller__inner');
     if (!scrollerInner) return;
     
     // Clear existing content
     scrollerInner.innerHTML = '';
     
     // Create skills for scrolling animation
     skillsData.forEach((skill, index) => {
          const skillItem = document.createElement('li');
          skillItem.innerHTML = `
               <img src="${skill.icon}" alt="${skill.name}" title="${skill.title}" />
          `;
          scrollerInner.appendChild(skillItem);
     });
}

// Scrolling animation logic
function addScrollingAnimation() {
     const scrollers = document.querySelectorAll(".scroller");

     // If a user hasn't opted in for reduced motion, then we add the animation
     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          scrollers.forEach((scroller) => {
               // add data-animated="true" to every `.scroller` on the page
               scroller.setAttribute("data-animated", true);

               // Make an array from the elements within `.scroller-inner`
               const scrollerInner = scroller.querySelector(".scroller__inner");
               const scrollerContent = Array.from(scrollerInner.children);

               // For each item in the array, clone it
               // add aria-hidden to it
               // add it into the `.scroller-inner`
               scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
               });
          });
     }
}

// Highlight nav link based on current section
document.addEventListener('DOMContentLoaded', function () {
     const navLinks = document.querySelectorAll('.nav-link');
     const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
     const sectionEls = sections.map(id => document.getElementById(id));

     function highlightNav() {
          let current = -1;
          sectionEls.forEach((section, i) => {
               if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                         current = i;
                    }
               }
          });
          navLinks.forEach((link, i) => {
               if (i === current) {
                    link.classList.add('active');
               } else {
                    link.classList.remove('active');
               }
          });
     }
     window.addEventListener('scroll', highlightNav);
     highlightNav();
     
     // Generate skill icons dynamically and add scrolling animation
     generateSkillIcons();
     addScrollingAnimation();
});
function downloadResume() {
     const link = document.createElement('a');
    link.href = 'Nikhil_Malviya_FullStack_Developer_Resume.pdf';  // file path
    link.download = 'Nikhil_Malviya_Resume'; // downloaded file name
    link.click();
    // Show smooth notification
  showNotification("Resume downloaded successfully!");
}

// Show Notification
function showNotification(message) {
  const notif = document.getElementById("notification");
  notif.innerText = message;
  notif.classList.add("show");

  // Hide after 3 seconds
  setTimeout(() => {
    notif.classList.remove("show");
  }, 3000);
}

// --- Project Data ---
const projects = [
     {
          title: 'NGO Saathi',
          desc: 'Developed a centralized SaaS platform enabling NGOs to connect with donors, volunteers, and communities. Implemented role-based dashboards, real-time analytics, in-app chat, and full-featured NGO panels for managing donations, inventory, events, and volunteer coordination.',
          tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Socket.IO', 'JWT', 'Tailwind CSS'],
          type: 'Fullstack'
     },
     {
          title: 'BizFlow',
          desc: 'Created a customizable workflow automation tool combining CRM, task tracking, and invoicing modules. Implemented drag-and-drop workflow builder, lead management, notifications, and automated invoicing with email integration.',
          tags: ['REST API', 'React', 'Socket.IO', 'Node.js'],
          type: 'Productivity'
     },
     {
          title: 'RemoteCollab',
          desc: 'Built a Slack-like collaboration tool with messaging, task management, and file sharing. Implemented real-time chat, Kanban boards, notifications, and presence indicators with dark mode support.',
          tags: ['Socket.IO', 'Firebase', 'Cloudinary', 'Redis', 'React', 'Node.js'],
          type: 'Collaboration'
     },
     {
          title: 'Smart Learning Hub',
          desc: 'Developed an online learning platform featuring course enrollment, quizzes, certifications, and gamification. Included an admin panel for content management and Stripe integration for monetization.',
          tags: ['JWT', 'Stripe', 'PDFKit', 'Node.js', 'React'],
          type: 'EdTech'
     },
     {
          title: 'Click&Cart',
          desc: 'Created a scalable e-commerce platform with role-based dashboards for admins, sellers, and customers. Implemented Razorpay integration, real-time order tracking, invoice downloads, and product management.',
          tags: ['MERN Stack', 'Razorpay', 'Cloudinary', 'Tailwind CSS', 'JWT', 'Node.js', 'React'],
          type: 'E-Commerce'
     },
     {
          title: 'Personal Portfolio Website',
          desc: 'This very website! A responsive and modern portfolio showcasing skills, projects, and professional experience.',
          tags: ['HTML', 'CSS', 'JavaScript'],
          type: 'Frontend'
     },
];

let currentPage = 1;
const projectsPerPage = 6;
let filteredProjects = projects;

function renderProjects() {
     const grid = document.querySelector('.project-grid');
     grid.innerHTML = '';
     const start = (currentPage - 1) * projectsPerPage;
     const end = start + projectsPerPage;
     const pageProjects = filteredProjects.slice(start, end);
     pageProjects.forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.innerHTML = `
      <h3 style="color:var(--accent-dark); margin-bottom:10px;">${project.title}</h3>
      <p>${project.desc}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
    `;
          grid.appendChild(card);
     });
     document.getElementById('pageIndicator').textContent = `Page ${currentPage}`;
     document.getElementById('prevPage').disabled = currentPage === 1;
     document.getElementById('nextPage').disabled = end >= filteredProjects.length;
}

document.getElementById('prevPage').addEventListener('click', () => {
     if (currentPage > 1) {
          currentPage--;
          renderProjects();
     }
});
document.getElementById('nextPage').addEventListener('click', () => {
     if ((currentPage * projectsPerPage) < filteredProjects.length) {
          currentPage++;
          renderProjects();
     }
});

document.querySelectorAll('.project-tags button').forEach(btn => {
     btn.addEventListener('click', () => {
          const tag = btn.textContent;
          if (tag === 'All') {
               filteredProjects = projects;
          } else if (tag === 'Full Stack' || tag === 'Frontend' || tag === 'Backend' || tag === 'AI/ML') {
               filteredProjects = projects.filter(p => p.type === tag);
          } else {
               filteredProjects = projects.filter(p => p.tags.includes(tag));
          }
          currentPage = 1;
          renderProjects();
     });
});

document.addEventListener('DOMContentLoaded', () => {
     renderProjects();

     // Enhanced Scroll Animation with stagger effect
     const animatedSections = document.querySelectorAll('section');
     animatedSections.forEach((section, index) => {
          section.classList.add('fade-in');
          section.style.transitionDelay = `${index * 0.1}s`;
     });

     // Add parallax effect to hero section
     const heroSection = document.querySelector('.hero');
     const heroSvg = document.querySelector('.hero-graphic svg');
     
     window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const parallax = scrolled * 0.3;
          
          if (heroSvg && scrolled < window.innerHeight) {
               heroSvg.style.transform = `translateY(${parallax}px)`;
          }
     });

     // Enhanced project tag interactivity
     document.querySelectorAll('.project-tags button').forEach((btn, index) => {
          btn.addEventListener('mouseenter', () => {
               btn.style.transform = 'translateY(-2px) scale(1.05)';
          });
          
          btn.addEventListener('mouseleave', () => {
               if (!btn.classList.contains('active')) {
                    btn.style.transform = 'translateY(0) scale(1)';
               }
          });
          
          btn.addEventListener('click', () => {
               // Remove active class from all buttons
               document.querySelectorAll('.project-tags button').forEach(b => {
                    b.classList.remove('active');
                    b.style.transform = 'translateY(0) scale(1)';
               });
               
               // Add active class to clicked button
               btn.classList.add('active');
               btn.style.transform = 'translateY(-2px) scale(1.05)';
          });
     });

     // Add card hover effects
     const cards = document.querySelectorAll('.exp-card-modern, .project-card');
     cards.forEach(card => {
          card.addEventListener('mouseenter', () => {
               card.style.transform = 'translateY(-8px)';
          });
          
          card.addEventListener('mouseleave', () => {
               card.style.transform = 'translateY(0)';
          });
     });

     // Logo Scroll to Top with smooth animation
     const logo = document.querySelector('.logo');
     if (logo) {
          logo.addEventListener('click', (e) => {
               e.preventDefault();
               window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
               });
          });
          
          logo.style.cursor = 'pointer';
          logo.addEventListener('mouseenter', () => {
               logo.style.transform = 'scale(1.05)';
          });
          
          logo.addEventListener('mouseleave', () => {
               logo.style.transform = 'scale(1)';
          });
     }

     // --- Smooth Scroll for Navbar Links ---
     document.querySelectorAll('header nav a').forEach(link => {
          link.addEventListener('click', function (e) {
               const href = this.getAttribute('href');
               if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                         target.scrollIntoView({ behavior: 'smooth' });
                    }
               }
          });
     });

     // --- Dark/Light Mode Toggle ---
     const themeToggle = document.getElementById('theme-toggle');
     // Check localStorage for theme
     let isDark = localStorage.getItem('theme') !== 'light'; // default is dark
     function setTheme(dark) {
          if (dark) {
               document.body.classList.remove('light-mode');
               themeToggle.checked = true;
          } else {
               document.body.classList.add('light-mode');
               themeToggle.checked = false;
          }
     }
     setTheme(isDark);
     themeToggle.addEventListener('change', () => {
          if (themeToggle.checked) {
               document.body.classList.remove('light-mode');
               localStorage.setItem('theme', 'dark');
          } else {
               document.body.classList.add('light-mode');
               localStorage.setItem('theme', 'light');
          }
     });

     function onScrollAnimate() {
          animatedSections.forEach(section => {
               const rect = section.getBoundingClientRect();
               if (rect.top < window.innerHeight - 50) {
                    section.classList.add('visible');
               } else {
                    section.classList.remove('visible');
               }
          });
     }
     window.addEventListener('scroll', onScrollAnimate);
     onScrollAnimate(); // Initial check

     // --- Navbar Show/Hide Animation ---
     const header = document.querySelector('header');
     let lastScrollY = window.scrollY;
     let ticking = false;
     function handleNavbar() {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY && currentScrollY > 60) {
               // Scrolling down
               header.classList.remove('navbar-show');
               header.classList.add('navbar-hide');
          } else {
               // Scrolling up
               header.classList.remove('navbar-hide');
               header.classList.add('navbar-show');
          }
          lastScrollY = currentScrollY;
          ticking = false;
     }
     function onScroll() {
          if (!ticking) {
               window.requestAnimationFrame(handleNavbar);
               ticking = true;
          }
     }
     window.addEventListener('scroll', onScroll);
     // Always show navbar on load
     header.classList.add('navbar-show');

     // --- Enhanced Contact Form ---
     const contactForm = document.querySelector('.contact-form');
     const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
     const submitBtn = document.querySelector('.contact-btn');

     // Add form validation and enhancement
     if (contactForm) {
          contactForm.addEventListener('submit', function(e) {
               e.preventDefault();
               
               // Add loading state
               const originalText = submitBtn.innerHTML;
               submitBtn.innerHTML = `
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite; margin-right: 8px;">
                         <path d="M21 12a9 9 0 11-6.219-8.56"/>
                    </svg>
                    Sending...
               `;
               submitBtn.disabled = true;

               // Simulate form submission (replace with actual submission logic)
               setTimeout(() => {
                    submitBtn.innerHTML = `
                         <svg width="22" height="22" fill="none" viewBox="0 0 24 24" style="margin-right: 8px;">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                         </svg>
                         Message Sent!
                    `;
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after delay
                    setTimeout(() => {
                         submitBtn.innerHTML = originalText;
                         submitBtn.disabled = false;
                         submitBtn.style.background = '';
                    }, 3000);
               }, 2000);
          });

          // Add input focus effects
          formInputs.forEach(input => {
               input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
               });
               
               input.addEventListener('blur', function() {
                    if (!this.value) {
                         this.parentElement.classList.remove('focused');
                    }
               });

               // Add input validation
               input.addEventListener('input', function() {
                    validateField(this);
               });
          });
     }

     function validateField(field) {
          const value = field.value.trim();
          const type = field.type;
          let isValid = true;

          // Remove existing error styling
          field.style.borderColor = '';
          
          if (value === '') {
               isValid = false;
          } else if (type === 'email') {
               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               isValid = emailRegex.test(value);
          }

          if (!isValid && value !== '') {
               field.style.borderColor = '#ef4444';
               field.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
          } else if (isValid && value !== '') {
               field.style.borderColor = '#10b981';
               field.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.1)';
          }
     }

     // Add CSS for spinner animation
     const style = document.createElement('style');
     style.textContent = `
          @keyframes spin {
               0% { transform: rotate(0deg); }
               100% { transform: rotate(360deg); }
          }
          
          .form-group.focused label {
               color: var(--accent-dark) !important;
          }
     `;
     document.head.appendChild(style);
});

// ===== SKILLS ICON ANIMATION =====
// document.addEventListener('DOMContentLoaded', function() {
//      const skillIcons = document.querySelectorAll('.skill-icon');
//      const skillsSection = document.querySelector('#skills');
     
//      if (!skillIcons.length || !skillsSection) return;
     
//      let animationTimer;
//      let isAnimating = false;
     
//      function restartAnimation() {
//           if (isAnimating) return;
          
//           isAnimating = true;
          
//           // Reset all icons to initial state
//           skillIcons.forEach(icon => {
//                icon.style.animation = 'none';
//                icon.style.opacity = '0';
//                icon.style.transform = 'scale(0) translateY(20px) rotateZ(-15deg)';
//           });
          
//           // Force reflow
//           skillIcons[0].offsetHeight;
          
//           // Restart animations with sequential delays
//           skillIcons.forEach((icon, index) => {
//                const delay = (index % 25) * 0.2; // Reset delay every 25 icons
               
//                setTimeout(() => {
//                     icon.style.animation = 'appearOneByOne 2s ease-out forwards';
//                     icon.style.animationDelay = '0s';
//                }, delay * 1000);
//           });
          
//           // Set timer for next restart (after all animations complete)
//           const totalDuration = (25 * 0.2 + 2 + 3) * 1000; // 25 icons * 0.2s delay + 2s animation + 3s pause
          
//           animationTimer = setTimeout(() => {
//                isAnimating = false;
//                restartAnimation();
//           }, totalDuration);
//      }
     
//      function pauseAnimation() {
//           if (animationTimer) {
//                clearTimeout(animationTimer);
//           }
//           skillIcons.forEach(icon => {
//                icon.style.animationPlayState = 'paused';
//           });
//      }
     
//      function resumeAnimation() {
//           skillIcons.forEach(icon => {
//                icon.style.animationPlayState = 'running';
//           });
          
//           if (!isAnimating) {
//                restartAnimation();
//           }
//      }
     
//      // Intersection Observer to start animation when section is visible
//      const observer = new IntersectionObserver((entries) => {
//           entries.forEach(entry => {
//                if (entry.isIntersecting) {
//                     if (!isAnimating) {
//                          restartAnimation();
//                     }
//                } else {
//                     pauseAnimation();
//                }
//           });
//      }, { threshold: 0.3 });
     
//      observer.observe(skillsSection);
     
//      // Pause/resume on hover
//      skillsSection.addEventListener('mouseenter', pauseAnimation);
//      skillsSection.addEventListener('mouseleave', resumeAnimation);
     
//      // Pause when page is not visible
//      document.addEventListener('visibilitychange', () => {
//           if (document.hidden) {
//                pauseAnimation();
//           } else {
//                resumeAnimation();
//           }
//      });
     
//      // Add sparkle effect on icon appearance
//      // function createSparkle(icon) {
//      //      for (let i = 0; i < 3; i++) {
//      //           const sparkle = document.createElement('div');
//      //           sparkle.style.cssText = `
//      //                position: absolute;
//      //                top: ${Math.random() * 100}%;
//      //                left: ${Math.random() * 100}%;
//      //                width: 4px;
//      //                height: 4px;
//      //                background: var(--accent-light);
//      //                border-radius: 50%;
//      //                pointer-events: none;
//      //                animation: sparkleEffect 1s ease-out forwards;
//      //                z-index: 10;
//      //           `;
               
//      //           icon.appendChild(sparkle);
               
//      //           setTimeout(() => {
//      //                if (sparkle.parentNode) {
//      //                     sparkle.parentNode.removeChild(sparkle);
//      //                }
//      //           }, 1000);
//      //      }
//      // }
     
//      // Add sparkle animation CSS
//      // const sparkleStyles = document.createElement('style');
//      // sparkleStyles.textContent = `
//      //      @keyframes sparkleEffect {
//      //           0% {
//      //                opacity: 1;
//      //                transform: scale(0) rotate(0deg);
//      //           }
//      //           50% {
//      //                opacity: 1;
//      //                transform: scale(1) rotate(180deg);
//      //           }
//      //           100% {
//      //                opacity: 0;
//      //                transform: scale(0) rotate(360deg);
//      //           }
//      //      }
          
//      //      .skill-icon.appearing {
//      //           position: relative;
//      //           overflow: visible;
//      //      }
//      // `;
//      document.head.appendChild(sparkleStyles);
     
//      // Listen for animation completion to add sparkle effect
//      skillIcons.forEach(icon => {
//           icon.addEventListener('animationend', (e) => {
//                if (e.animationName === 'appearOneByOne') {
//                     icon.classList.add('appearing');
//                     createSparkle(icon);
                    
//                     setTimeout(() => {
//                          icon.classList.remove('appearing');
//                     }, 1000);
//                }
//           });
//      });
// });
