import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='divider'></div>
      <div class='footerContainer'>
        <div class='footerLists'>
          <ul>
            <li>
              <a href='/'>FAQ</a>
            </li>
            <li>
              <a href='/'>Investor Relations</a>
            </li>
            <li>
              <a href='/'>Privacy</a>
            </li>
            <li>
              <a href='/'>Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='/'>Help Center</a>
            </li>
            <li>
              <a href='/'>Jobs</a>
            </li>
            <li>
              <a href='/'>Cookie Preferences</a>
            </li>
            <li>
              <a href='/'>Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='/'>Account</a>
            </li>
            <li>
              <a href='/'>Ways to Watch</a>
            </li>
            <li>
              <a href='/'>Corporate Information</a>
            </li>
            <li>
              <a href='/'>Only on Netflix</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='/'>Media Center</a>
            </li>
            <li>
              <a href='/'>Terms of Use</a>
            </li>
            <li>
              <a href='/'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
