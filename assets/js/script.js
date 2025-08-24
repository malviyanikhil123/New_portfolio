/**
 * ===============================================================================
 * NIKHIL MALVIYA - PORTFOLIO WEBSITE JAVASCRIPT
 * ===============================================================================
 * 
 * Author: Nikhil Malviya
 * Description: Interactive functionality for personal portfolio website
 * Features: Skills animation, project pagination, theme toggle, experience calculator
 * 
 * Table of Contents:
 * 1. Skills Data & Management
 * 2. Experience Calculator
 * 3. Skills Animation System
 * 4. Navigation & Scroll Handlers
 * 5. Project Management System
 * 6. Resume Download & Notifications
 * 7. User Interface Interactions
 * 8. Theme Toggle System
 * 9. Mobile Navigation Functionality
 * 
 * ===============================================================================
 */

/*
 * ========================================
 * 1. SKILLS DATA & MANAGEMENT
 * ========================================
 * Comprehensive collection of technical skills organized by category
 * Each skill includes icon path and descriptive title for display
 */

/**
 * Master skills database containing all technologies and tools
 * Organized by categories: Frontend, Backend, Databases, Cloud & DevOps, Development Tools
 * @type {Array<Object>} Array of skill objects with name, icon, and title properties
 */

/* =============================================================================
   1. SKILLS DATA & MANAGEMENT
   ============================================================================= */

/**
 * Comprehensive skills data array containing all technical expertise
 * Each skill object includes name, icon path, and descriptive title
 * Organized by categories: Frontend, Backend, Databases, Cloud & DevOps, Tools
 */
const skillsData = [
     // Frontend Technologies
     { name: 'React.js', icon: 'assets/images/skills-icon/React.png', title: 'React.js' },
     { name: 'TypeScript', icon: 'assets/images/skills-icon/typescript.png', title: 'TypeScript' },
     { name: 'JavaScript', icon: 'assets/images/skills-icon/java-script.png', title: 'JavaScript (ES6+)' },
     { name: 'HTML5', icon: 'assets/images/skills-icon/HTML5.png', title: 'HTML & CSS3' },
     { name: 'CSS3', icon: 'assets/images/skills-icon/CSS3.png', title: 'CSS3' },
     { name: 'Tailwind CSS', icon: 'assets/images/skills-icon/Tailwind CSS.png', title: 'Tailwind CSS' },
     { name: 'Redux', icon: 'assets/images/skills-icon/Redux.png', title: 'Redux' },
     { name: 'Vite', icon: 'assets/images/skills-icon/Vite.js.png', title: 'Vite' },
     
     // Backend Technologies
     { name: 'Node.js', icon: 'assets/images/skills-icon/Node.js.png', title: 'Node.js' },
     { name: 'Express.js', icon: 'assets/images/skills-icon/Express.png', title: 'Express.js & REST APIs' },
     { name: 'NestJS', icon: 'assets/images/skills-icon/Nest.js.png', title: 'NestJS & Microservices' },
     { name: 'Python', icon: 'assets/images/skills-icon/python.png', title: 'Python' },
     { name: 'GraphQL', icon: 'assets/images/skills-icon/GraphQL.png', title: 'GraphQL' },
     { name: 'Socket.io', icon: 'assets/images/skills-icon/Socket.io.png', title: 'Socket.io' },
     
     // Databases
     { name: 'MongoDB', icon: 'assets/images/skills-icon/MongoDB.png', title: 'MongoDB & NoSQL' },
     { name: 'PostgreSQL', icon: 'assets/images/skills-icon/PostgresSQL.png', title: 'PostgreSQL' },
     { name: 'MySQL', icon: 'assets/images/skills-icon/MySQL.png', title: 'MySQL' },
     { name: 'Redis', icon: 'assets/images/skills-icon/Redis.png', title: 'Redis' },
     
     // Cloud & DevOps
     { name: 'AWS', icon: 'assets/images/skills-icon/AWS.png', title: 'AWS' },
     { name: 'Azure', icon: 'assets/images/skills-icon/Azure.png', title: 'Azure' },
     { name: 'Docker', icon: 'assets/images/skills-icon/Docker.png', title: 'Docker' },
     { name: 'Kubernetes', icon: 'assets/images/skills-icon/Kubernetes.png', title: 'Kubernetes' },
     { name: 'Jenkins', icon: 'assets/images/skills-icon/Jenkins.png', title: 'Jenkins' },
     { name: 'Terraform', icon: 'assets/images/skills-icon/HashiCorp Terraform.png', title: 'HashiCorp Terraform' },
     { name: 'Ansible', icon: 'assets/images/skills-icon/Ansible.png', title: 'Ansible' },
     { name: 'Apache Kafka', icon: 'assets/images/skills-icon/Apache Kafka.png', title: 'Apache Kafka' },
     { name: 'NGINX', icon: 'assets/images/skills-icon/NGINX.png', title: 'NGINX' },
     { name: 'Grafana', icon: 'assets/images/skills-icon/Grafana.png', title: 'Grafana' },
     { name: 'Prometheus', icon: 'assets/images/skills-icon/Prometheus.png', title: 'Prometheus' },
     
     // Development Tools & Others
     { name: 'Git', icon: 'assets/images/skills-icon/Git.png', title: 'Git' },
     { name: 'GitHub', icon: 'assets/images/skills-icon/GitHub.png', title: 'GitHub' },
     { name: 'Jira', icon: 'assets/images/skills-icon/Jira.png', title: 'Jira' },
     { name: 'Postman', icon: 'assets/images/skills-icon/Postman.png', title: 'Postman' },
     { name: 'Figma', icon: 'assets/images/skills-icon/Figma.png', title: 'Figma' },
     { name: 'Linux', icon: 'assets/images/skills-icon/Linux.png', title: 'Linux' },
          { name: 'Ubuntu', icon: 'assets/images/skills-icon/Ubuntu.png', title: 'Ubuntu' }
 ];

/*
 * ========================================
 * 2. SCROLL TRACKING FUNCTIONALITY
 * ========================================
 * Implements a visual progress indicator that tracks user scroll position
 * and provides smooth visual feedback at the top of the page
 */

/**
 * Updates the scroll progress bar based on current scroll position
 * Creates a visual indicator showing percentage of page scrolled
 * Uses smooth animation and backdrop blur effects for modern appearance
 */
function updateProgressBar() {
     // Calculate scroll percentage based on total document height
     const scrollTop = window.pageYOffset;
     const docHeight = document.body.scrollHeight - window.innerHeight;
     const scrollPercent = (scrollTop / docHeight) * 100;
     
     // Update progress bar width with smooth transition
     const progressBar = document.querySelector('.progress-bar');
     if (progressBar) {
          progressBar.style.width = scrollPercent + '%';
     }
}

/*
 * ========================================
 * 3. SKILLS ANIMATION SYSTEM
 * ========================================
 * Dynamic skill icon generation and infinite scroll animation
 * Creates smooth continuous scrolling effect for technology showcase
 */

/**
 * Generates skill icons dynamically for the scrolling animation
 * Creates interactive skill cards with hover effects and proper accessibility
 * Implements infinite scroll animation for continuous visual flow
 */
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

/*
 * ========================================
 * 2. EXPERIENCE CALCULATOR
 * ========================================
 * Automatically calculates and displays years of professional experience
 * Updates dynamically based on joining date and current date
 */

/**
 * Calculates and updates years of professional experience
 * Computes experience from joining date to current date
 * Formats display as years and months with appropriate labels
 */
function updateExperience() {
     const joiningDate = new Date('2025-05-19'); // May 19, 2025
     const currentDate = new Date();

     // Calculate the difference in time
     const timeDiff = currentDate.getTime() - joiningDate.getTime();
     const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

     // Calculate years and months
     const yearsDiff = currentDate.getFullYear() - joiningDate.getFullYear();
     const monthsDiff = currentDate.getMonth() - joiningDate.getMonth();

     let totalMonths = yearsDiff * 12 + monthsDiff;

     // Adjust for day of month
     if (currentDate.getDate() < joiningDate.getDate()) {
          totalMonths--;
     }

     // Convert to years and remaining months
     const years = Math.floor(totalMonths / 12);
     const months = totalMonths % 12;

     // Format the experience string and determine label
     let experienceText;
     let experienceLabel;

     if (years === 0) {
          if (months === 0) {
               experienceText = "< 1";
               experienceLabel = "Month Experience";
          } else if (months === 1) {
               experienceText = "1";
               experienceLabel = "Month Experience";
          } else {
               experienceText = `${months}`;
               experienceLabel = "Months Experience";
          }
     } else if (years === 1) {
          if (months === 0) {
               experienceText = "1";
               experienceLabel = "Year Experience";
          } else if (months === 1) {
               experienceText = "1.1";
               experienceLabel = "Years Experience";
          } else {
               experienceText = `1.${Math.round((months / 12) * 10)}`;
               experienceLabel = "Years Experience";
          }
     } else {
          if (months === 0) {
               experienceText = `${years}`;
               experienceLabel = "Years Experience";
          } else {
               const decimal = Math.round((months / 12) * 10);
               experienceText = `${years}.${decimal}`;
               experienceLabel = "Years Experience";
          }
     }

     // Update the DOM elements
     const experienceElement = document.getElementById('experienceYears');
     const labelElement = document.getElementById('experienceLabel');

     if (experienceElement) {
          experienceElement.textContent = experienceText;
     }

     if (labelElement) {
          labelElement.textContent = experienceLabel;
     }
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

/*
 * ========================================
 * 4. NAVIGATION & SCROLL HANDLERS
 * ========================================
 * Manages navigation highlighting, smooth scrolling, and scroll-based interactions
 * Provides seamless user experience with visual feedback and progress tracking
 */

/**
 * Main navigation and scroll management system
 * Handles section highlighting, progress bar updates, and smooth scrolling behavior
 * Implements intersection observer for accurate section detection
 */
// Highlight nav link based on current section
document.addEventListener('DOMContentLoaded', function () {
     const navLinks = document.querySelectorAll('.nav-link');
     const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
     const sectionEls = sections.map(id => document.getElementById(id));

     // Progress Bar Functionality - Get reference to progress indicator
     const progressBar = document.getElementById('scrollProgress');

/*
 * ========================================
 * SCROLL TRACKING FUNCTIONALITY
 * ========================================
 * Implements a visual progress indicator that tracks user scroll position
 * and provides smooth visual feedback at the top of the page
 */

/**
 * Updates the scroll progress bar based on current scroll position
 * Creates a visual indicator showing percentage of page scrolled
 * Uses smooth animation and backdrop blur effects for modern appearance
 */
 /**
  * Updates scroll progress bar based on current scroll position  
  * Calculates percentage of page scrolled and updates visual indicator
  * Uses cross-browser compatible scroll measurement approach
  */
 function updateProgressBar() {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;

          if (progressBar) {
               progressBar.style.width = scrolled + '%';
          }
     }

     /**
      * Highlights active navigation link based on current section in viewport
      * Uses element positioning to determine which section is currently visible
      * Provides visual feedback for user's current location on page
      */
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

     window.addEventListener('scroll', () => {
          highlightNav();
          updateProgressBar();
     });

     highlightNav();
     updateProgressBar(); // Initial call
     updateExperience(); // Calculate and display experience

     // Generate skill icons dynamically and add scrolling animation
     generateSkillIcons();
     addScrollingAnimation();
});

/*
 * ========================================
 * 5. RESUME DOWNLOAD FUNCTIONALITY  
 * ========================================
 * Handles resume download with user feedback and notification system
 * Provides smooth download experience with delayed success confirmation
 */

/**
 * Initiates resume download and provides user feedback
 * Creates download link dynamically and triggers download action
 * Shows delayed success notification for better user experience
 */
function downloadResume() {
     // Create temporary download link element
     const link = document.createElement('a');
     link.href = 'resume/Nikhil_Malviya_FullStack_Developer_Resume.pdf';  // Resume file path
     link.download = 'Nikhil_Malviya_FullStack_Developer_Resume'; // Downloaded file name
     link.click(); // Trigger download

     // Show notification with delay to feel more natural and allow download to start
     setTimeout(() => {
          showNotification("Resume downloaded successfully!");
     }, 1500); // 1500ms delay for better UX
}

/*
 * ========================================
 * 6. NOTIFICATION SYSTEM
 * ========================================
 * User feedback system for actions and status updates
 * Provides clean, temporary notifications with smooth animations
 */

/**
 * Displays temporary notification message to user
 * Creates styled notification element with automatic removal
 * Provides visual feedback for user actions and system status
 */
function showNotification(message) {
     // Get notification element and update content
     const notif = document.getElementById("notification");
     notif.innerText = message;
     notif.classList.add("show"); // Show notification with CSS animation

     // Automatically hide notification after 3 seconds
     setTimeout(() => {
          notif.classList.remove("show");
     }, 3000);
}

/*
 * ========================================
 * 7. PROJECT MANAGEMENT SYSTEM
 * ========================================
 * Portfolio project data and pagination functionality
 * Manages project display, filtering, and interactive navigation
 */

/**
 * Comprehensive projects database containing portfolio work
 * Each project includes title, description, technologies, and type classification
 * Organized to showcase full-stack development capabilities and diverse expertise
 * @type {Array<Object>} Array of project objects with detailed information
 */
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

// Project pagination variables
let currentPage = 1;              // Current page number for pagination
const projectsPerPage = 6;        // Number of projects to display per page
let filteredProjects = projects;  // Currently filtered project list

/**
 * Renders projects for current page with pagination controls
 * Creates project cards dynamically and updates pagination state
 * Handles project display, navigation buttons, and page indicators
 */
function renderProjects() {
     const grid = document.querySelector('.project-grid');
     grid.innerHTML = ''; // Clear existing project cards
     
     // Calculate pagination boundaries
     const start = (currentPage - 1) * projectsPerPage;
     const end = start + projectsPerPage;
     const pageProjects = filteredProjects.slice(start, end);
     
     // Generate project cards for current page
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
     
     // Update pagination controls and indicators
     document.getElementById('pageIndicator').textContent = `Page ${currentPage}`;
     document.getElementById('prevPage').disabled = currentPage === 1;
     document.getElementById('nextPage').disabled = end >= filteredProjects.length;
}

/**
 * Project pagination event handlers
 * Manages navigation between project pages with smooth transitions
 */
// Previous page navigation
document.getElementById('prevPage').addEventListener('click', () => {
     if (currentPage > 1) {
          currentPage--;
          renderProjects();
     }
});
// Next page navigation
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

/*
 * ========================================
 * 9. THEME TOGGLE SYSTEM
 * ========================================
 * Manages dark/light mode switching with persistent user preference
 * Provides smooth theme transitions and local storage integration
 */

/**
 * Theme management system with localStorage persistence
 * Handles theme switching between dark and light modes
 * Maintains user preference across browser sessions
 */
// Get theme toggle element
const themeToggle = document.getElementById('theme-toggle');

// Check localStorage for saved theme preference (default is dark mode)
let isDark = localStorage.getItem('theme') !== 'light';

/**
 * Sets the theme mode and updates UI elements accordingly
 * @param {boolean} dark - Whether to use dark mode (true) or light mode (false)
 */
function setTheme(dark) {
     if (dark) {
          document.body.classList.remove('light-mode');
          themeToggle.checked = true;
     } else {
          document.body.classList.add('light-mode');
          themeToggle.checked = false;
     }
}

// Initialize theme based on saved preference
setTheme(isDark);

// Theme toggle event listener with localStorage persistence
themeToggle.addEventListener('change', () => {
     if (themeToggle.checked) {
          // Switch to dark mode
          document.body.classList.remove('light-mode');
          localStorage.setItem('theme', 'dark');
     } else {
          // Switch to light mode
          document.body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
     }
});

/*
 * ========================================
 * 10. SCROLL ANIMATION SYSTEM
 * ========================================
 * Manages scroll-triggered animations and visual effects
 * Creates engaging user experience with smooth section reveals
 */

/**
 * Handles scroll-triggered animations for sections
 * Adds/removes visibility classes based on scroll position
 * Creates smooth reveal effects as user scrolls through content
 */
function onScrollAnimate() {
     animatedSections.forEach(section => {
          const rect = section.getBoundingClientRect();
          // Trigger animation when section is 50px from bottom of viewport
          if (rect.top < window.innerHeight - 50) {
               section.classList.add('visible');
          } else {
               section.classList.remove('visible');
          }
     });
}

// Attach scroll animation handler and run initial check
window.addEventListener('scroll', onScrollAnimate);
onScrollAnimate(); // Initial check for sections already in view

/*
 * ========================================
 * 11. NAVBAR SHOW/HIDE FUNCTIONALITY
 * ========================================
 * Implements smart navbar behavior based on scroll direction
 * Hides navbar on scroll down, shows on scroll up for better UX
 */

/**
 * Smart navbar visibility control based on scroll direction
 * Enhances user experience by hiding navigation when scrolling down
 * and showing it when scrolling up for easy access
 */
const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let ticking = false;

/**
 * Handles navbar visibility based on scroll direction
 * Uses requestAnimationFrame for smooth performance
 */
function handleNavbar() {
     const currentScrollY = window.scrollY;
     if (currentScrollY > lastScrollY && currentScrollY > 60) {
          // Scrolling down - hide navbar
          header.classList.remove('navbar-show');
          header.classList.add('navbar-hide');
     } else {
          // Scrolling up - show navbar
          header.classList.remove('navbar-hide');
          header.classList.add('navbar-show');
     }
     lastScrollY = currentScrollY;
     ticking = false;
}

/**
 * Optimized scroll handler using requestAnimationFrame
 * Prevents excessive function calls during scroll events
 */
function onScroll() {
     if (!ticking) {
          window.requestAnimationFrame(handleNavbar);
          ticking = true;
     }
}

// Attach scroll handler and ensure navbar is visible on load
window.addEventListener('scroll', onScroll);
header.classList.add('navbar-show'); // Always show navbar on page load

/*
 * ========================================
 * 12. CONTACT FORM ENHANCEMENT
 * ========================================
 * Enhanced contact form with validation, loading states, and user feedback
 * Provides smooth form submission experience with visual indicators
 */

/**
 * Enhanced contact form functionality with validation and feedback
 * Includes loading states, success indicators, and field validation
 */
     const contactForm = document.querySelector('.contact-form');
     const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
     const submitBtn = document.querySelector('.contact-btn');

     // Add form validation and enhancement
     if (contactForm) {
          contactForm.addEventListener('submit', function (e) {
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
               input.addEventListener('focus', function () {
                    this.parentElement.classList.add('focused');
               });

               input.addEventListener('blur', function () {
                    if (!this.value) {
                         this.parentElement.classList.remove('focused');
                    }
               });

               // Add input validation
               input.addEventListener('input', function () {
                    validateField(this);
               });
          });
     }

/**
 * Validates individual form fields with real-time feedback
 * Provides visual indicators for field validation states
 * Supports email validation and required field checking
 * @param {HTMLElement} field - The form field element to validate
 */
function validateField(field) {
     const value = field.value.trim();
     const type = field.type;
     let isValid = true;

     // Remove existing error styling before validation
     field.style.borderColor = '';

     // Check if field is empty (required validation)
     if (value === '') {
          isValid = false;
     } else if (type === 'email') {
          // Email format validation using regex pattern
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          isValid = emailRegex.test(value);
     }

     // Apply error styling for invalid fields with content
     if (!isValid && value !== '') {
          field.style.borderColor = '#ef4444'; // Red border for errors
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

/*
 * ========================================
 * 9. MOBILE NAVIGATION FUNCTIONALITY
 * ========================================
 * Handles mobile navigation toggle, overlay display, and responsive behavior
 * Provides smooth transitions and proper event handling for mobile devices
 */

// DOM elements for mobile navigation
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavClose = document.getElementById('mobile-nav-close');

/**
 * Toggles the mobile navigation overlay
 * Shows/hides the mobile menu and manages body scroll
 */
function toggleMobileNav() {
     if (mobileNav.classList.contains('active')) {
          closeMobileNav();
     } else {
          mobileNav.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent background scroll
     }
}

/**
 * Closes the mobile navigation overlay
 * Hides the mobile menu and restores body scroll
 */
function closeMobileNav() {
     mobileNav.classList.remove('active');
     document.body.style.overflow = ''; // Restore background scroll
}

// Event listeners for mobile navigation
if (mobileNavToggle) {
     mobileNavToggle.addEventListener('click', toggleMobileNav);
}

if (mobileNavClose) {
     mobileNavClose.addEventListener('click', closeMobileNav);
}

// Close mobile nav when clicking on navigation links
if (mobileNav) {
     const mobileNavLinks = mobileNav.querySelectorAll('a');
     mobileNavLinks.forEach(link => {
          link.addEventListener('click', closeMobileNav);
     });
}

// Close mobile nav when clicking outside the overlay
document.addEventListener('click', (e) => {
     if (mobileNav && mobileNav.classList.contains('active') && 
         !mobileNav.contains(e.target) && 
         !mobileNavToggle.contains(e.target)) {
          closeMobileNav();
     }
});

// Close mobile nav on window resize (when switching to desktop)
window.addEventListener('resize', () => {
     if (window.innerWidth > 600 && mobileNav.classList.contains('active')) {
          closeMobileNav();
     }
});

/*
 * ===============================================================================
 * END OF PORTFOLIO WEBSITE JAVASCRIPT
 * ===============================================================================
 * 
 * This file provides comprehensive interactive functionality for the portfolio
 * website including theme management, skills animation, project pagination,
 * experience calculation, and enhanced user interface interactions.
 * 
 * All functions are documented with JSDoc comments for maintainability.
 * The code follows modern JavaScript practices and is optimized for performance.
 * 
 * Author: Nikhil Malviya
 * Last Updated: 2025
 * ===============================================================================
 */

// Initialize emailjs after the script is loaded 
// Initialize emailjs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
     emailjs.init("IwRDmExQb-1B38uIw"); // Your EmailJS public key
 
     document.getElementById("contact-form").addEventListener("submit", function (event) {
       event.preventDefault();
 
       const fullname = document.getElementById("fullname").value;
       const email = document.getElementById("email").value;
       const message = document.getElementById("message").value;
 
       emailjs.send("service_2tnsg7j", "template_fhwpxcn", {
         fullname: fullname,
         email: email,
         message: message
       }).then(
         function (response) {
           console.log("SUCCESS", response);
           alert("Message sent successfully!");
           document.getElementById("contact-form").reset();
         },
         function (error) {
           console.error("FAILED", error);
           alert("Failed to send message. Please try again.");
         }
       );
     });
   });