// --- Skills Data ---
const skillsData = [
     { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React.js' },
     { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', title: 'TypeScript' },
     { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript (ES6+)' },
     { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', title: 'HTML & CSS3' },
     { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', title: 'Tailwind CSS' },
     { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', title: 'Node.js' },
     { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', title: 'Python (Django, Flask)' },
     { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', title: 'Express.js & REST APIs' },
     { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', title: 'GraphQL' },
     { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', title: 'MongoDB & NoSQL' },
     { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', title: 'NestJS & Microservices' },
     { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', title: 'AWS' },
     { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', title: 'Docker' },
     { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', title: 'Kubernetes' },
     { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', title: 'CI/CD Pipelines' },
     { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', title: 'Git & GitHub' },
     { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', title: 'Jira' },
     { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', title: 'PostgreSQL' },
     { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', title: 'MySQL' },
     { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', title: 'Redis' },
     { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', title: 'Frameworks' },
     { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', title: 'Unit & Integration Testing' },
     { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', title: 'Webpack' },
     { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', title: 'Vite' },
     { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', title: 'Figma' }
];

// Function to generate skill icons dynamically
function generateSkillIcons() {
     const skillsColumn = document.querySelector('.skills-column');
     if (!skillsColumn) return;
     
     // Clear existing content
     skillsColumn.innerHTML = '';
     
     // Create skills twice for seamless loop
     const allSkills = [...skillsData, ...skillsData];
     
     allSkills.forEach((skill, index) => {
          const skillIcon = document.createElement('div');
          skillIcon.className = 'skill-icon';
          skillIcon.innerHTML = `
               <img src="${skill.icon}" alt="${skill.name}" title="${skill.title}" />
          `;
          skillsColumn.appendChild(skillIcon);
     });
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
     
     // Generate skill icons dynamically
     generateSkillIcons();
});
function downloadResume() {
     window.open('resume.pdf', '_blank');
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

     // Enhanced skills icon animation
     const skillIcons = document.querySelectorAll('.skills-icons li');
     skillIcons.forEach((icon, index) => {
          icon.style.animationDelay = `${index * 0.1}s`;
          
          icon.addEventListener('mouseenter', () => {
               icon.style.transform = 'translateY(-6px) scale(1.1) rotate(5deg)';
          });
          
          icon.addEventListener('mouseleave', () => {
               icon.style.transform = 'translateY(0) scale(1) rotate(0deg)';
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
