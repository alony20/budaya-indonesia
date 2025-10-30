/* Reset dan Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: #FAF9F7;
    color: #2A2A2A;
    line-height: 1.6;
    overflow-x: hidden;
}

body.no-scroll {
    overflow: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Navbar Styles */
.navbar {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #4A6FA5;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    gap: 30px;
}

.nav-link {
    color: #2A2A2A;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover, .nav-link.active {
    color: #4A6FA5;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4A6FA5;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #2A2A2A;
    margin: 3px 0;
    transition: 0.3s;
}

/* Search Container */
.search-container {
    background-color: #F0F5FF;
    padding: 15px 0;
}

.search-box {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.search-box input {
    flex: 1;
    padding: 12px 20px;
    border: none;
    outline: none;
    font-size: 1rem;
}

.search-box button {
    padding: 0 20px;
    background-color: #4A6FA5;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-box button:hover {
    background-color: #3a5a80;
}

/* Breadcrumb */
.breadcrumb {
    background-color: #fff;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}

.breadcrumb a {
    color: #4A6FA5;
    text-decoration: none;
}

.breadcrumb span {
    color: #666;
}

/* Header Styles */
header {
    text-align: center;
    padding: 40px 0;
    background: linear-gradient(135deg, #4A6FA5, #FFB347);
    color: white;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    animation: shine 3s infinite linear;
}

@keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    position: relative;
    animation: fadeInDown 1s ease-out;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease-out 0.3s both;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Filter Styles */
.filter-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.filter-btn {
    padding: 8px 16px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
}

.filter-btn.active, .filter-btn:hover {
    background-color: #4A6FA5;
    color: white;
    border-color: #4A6FA5;
}

/* Storyboard Styles */
.storyboard {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin: 40px 0;
}

.panel {
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
    width: 100%;
    max-width: 350px;
    opacity: 0;
    transform: translateY(20px);
    animation: panelAppear 0.6s ease forwards;
}

.panel:nth-child(1) { animation-delay: 0.1s; }
.panel:nth-child(2) { animation-delay: 0.2s; }
.panel:nth-child(3) { animation-delay: 0.3s; }
.panel:nth-child(4) { animation-delay: 0.4s; }
.panel:nth-child(5) { animation-delay: 0.5s; }
.panel:nth-child(6) { animation-delay: 0.6s; }

@keyframes panelAppear {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.panel:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.panel-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
    position: relative;
}

.panel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), transparent);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 15px;
}

.panel-badge {
    background-color: #4A6FA5;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

.panel:hover .panel-image {
    transform: scale(1.05);
}

.panel-content {
    padding: 25px;
}

.panel h2 {
    color: #4A6FA5;
    margin-bottom: 15px;
    font-size: 1.5rem;
    position: relative;
    padding-bottom: 10px;
}

.panel h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: #FFB347;
    transition: width 0.3s ease;
}

.panel:hover h2::after {
    width: 100px;
}

.panel p {
    color: #444;
    margin-bottom: 20px;
    line-height: 1.7;
    text-align: justify;
}

.panel-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.panel-actions {
    display: flex;
    gap: 10px;
}

.action-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.like-btn:hover, .like-btn.active {
    color: #e74c3c;
}

.share-btn:hover {
    color: #4A6FA5;
}

/* Read More Button */
.read-more {
    display: inline-flex;
    align-items: center;
    background-color: #4A6FA5;
    color: white;
    padding: 10px 18px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.read-more::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
}

.read-more:hover::before {
    left: 100%;
}

.read-more:hover {
    background-color: #FF6B6B;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
}

.read-more i {
    margin-left: 8px;
    transition: transform 0.3s ease;
}

.read-more:hover i {
    transform: translateX(5px);
}

/* Pagination */
.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
}

.page-btn {
    padding: 8px 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.page-btn.active, .page-btn:hover {
    background-color: #4A6FA5;
    color: white;
    border-color: #4A6FA5;
}

.page-btn.next {
    padding: 8px 20px;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    overflow: auto;
    animation: modalBgFade 0.3s ease;
}

@keyframes modalBgFade {
    from { background-color: rgba(0, 0, 0, 0); }
    to { background-color: rgba(0, 0, 0, 0.8); }
}

.modal-content {
    background-color: white;
    margin: 5% auto;
    padding: 35px;
    border-radius: 15px;
    width: 90%;
    max-width: 800px;
    position: relative;
    animation: modalSlideIn 0.5s ease;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-60px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.close {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    color: #aaa;
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.close:hover {
    color: #4A6FA5;
    background-color: #f0f0f0;
    transform: rotate(90deg);
}

.modal-image {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-bottom: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.modal h2 {
    color: #4A6FA5;
    margin-bottom: 20px;
    font-size: 2rem;
    position: relative;
    padding-bottom: 15px;
}

.modal h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: #FFB347;
    border-radius: 2px;
}

.modal-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    color: #666;
    font-size: 0.9rem;
}

.modal-meta span {
    display: flex;
    align-items: center;
    gap: 5px;
}

.modal p {
    color: #444;
    margin-bottom: 20px;
    line-height: 1.8;
    text-align: justify;
    font-size: 1.05rem;
}

.modal p:last-child {
    margin-bottom: 0;
}

.modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.tags {
    display: flex;
    gap: 10px;
}

.tag {
    background-color: #F0F5FF;
    color: #4A6FA5;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
}

.social-share {
    display: flex;
    align-items: center;
    gap: 10px;
}

.social-share a {
    color: #666;
    transition: color 0.3s;
}

.social-share a:hover {
    color: #4A6FA5;
}

/* Newsletter */
.newsletter {
    background: linear-gradient(135deg, #4A6FA5, #FFB347);
    color: white;
    padding: 50px 0;
    margin-top: 60px;
}

.newsletter-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.newsletter-content h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.newsletter-content p {
    margin-bottom: 25px;
    opacity: 0.9;
}

.newsletter-form {
    display: flex;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.newsletter-form input {
    flex: 1;
    padding: 15px 20px;
    border: none;
    outline: none;
    font-size: 1rem;
}

.newsletter-form button {
    padding: 0 25px;
    background-color: #FF6B6B;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

.newsletter-form button:hover {
    background-color: #e55a5a;
}

/* Footer */
footer {
    background-color: #2A2A2A;
    color: white;
    padding: 50px 0 20px;
    position: relative;
    overflow: hidden;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.footer-section h4 {
    color: #FFB347;
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.footer-section p {
    margin-bottom: 20px;
    line-height: 1.7;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: #FFB347;
}

.footer-section ul li i {
    margin-right: 10px;
    color: #FFB347;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    transition: all 0.3s;
}

.social-links a:hover {
    background-color: #4A6FA5;
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
    margin-bottom: 5px;
    opacity: 0.8;
}

/* Scroll to Top */
.scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #4A6FA5;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.scroll-top.active {
    opacity: 1;
    visibility: visible;
}

.scroll-top:hover {
    background: #FF6B6B;
    transform: translateY(-5px);
}

/* Responsive Styles */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        background-color: white;
        flex-direction: column;
        text-align: center;
        padding: 20px 0;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        transition: left 0.3s;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-toggle {
        display: flex;
    }
    
    .storyboard {
        flex-direction: column;
        align-items: center;
    }
    
    .panel {
        max-width: 100%;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .modal-content {
        padding: 25px;
        margin: 10% auto;
    }
    
    .modal h2 {
        font-size: 1.7rem;
    }
    
    .modal-footer {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
    
    .scroll-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
    }
    
    .newsletter-form {
        flex-direction: column;
        border-radius: 10px;
    }
    
    .newsletter-form button {
        padding: 15px;
    }
}

