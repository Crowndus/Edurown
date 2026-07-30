// ========================================
// Edurown — Shared Site Behavior
// ========================================

document.addEventListener('DOMContentLoaded', function () {
  // ===== MOBILE NAV TOGGLE =====
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // ===== SCROLL REVEAL =====
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // ===== NAV SCROLL EFFECT =====
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 40) { nav.classList.add('scrolled'); }
      else { nav.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===== FLOATING ACTION GROUP (FAQ + Chat) =====
  // Left: FAQ
  var faqBtn = document.getElementById('floatingFaqBtn');
  var faqPanel = document.getElementById('floatingFaqPanel');
  var faqClose = document.getElementById('floatingFaqClose');

  // Right: Chat
  var chatBtn = document.getElementById('floatingChatBtn');
  var chatPanel = document.getElementById('floatingChatPanel');
  var chatClose = document.getElementById('floatingChatClose');

  // --- FAQ Toggle ---
  if (faqBtn && faqPanel) {
    faqBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      // Close chat if open
      if (chatPanel) chatPanel.classList.remove('open');
      faqPanel.classList.toggle('open');
    });

    if (faqClose) {
      faqClose.addEventListener('click', function (e) {
        e.stopPropagation();
        faqPanel.classList.remove('open');
      });
    }
  }

  // --- Chat Toggle ---
  if (chatBtn && chatPanel) {
    chatBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      // Close FAQ if open
      if (faqPanel) faqPanel.classList.remove('open');
      chatPanel.classList.toggle('open');
    });

    if (chatClose) {
      chatClose.addEventListener('click', function (e) {
        e.stopPropagation();
        chatPanel.classList.remove('open');
      });
    }
  }

  // --- FAQ Toggle Items (expand/collapse) ---
  var faqToggleBtns = document.querySelectorAll('.faq-toggle-btn');
  faqToggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var targetId = this.getAttribute('data-target');
      var content = document.getElementById(targetId);
      if (content) {
        content.classList.toggle('open');
        this.classList.toggle('active');
      }
    });
  });

  // --- Click outside to close everything ---
  document.addEventListener('click', function (e) {
    var target = e.target;
    var isLeft = target.closest('.floating-left');
    var isRight = target.closest('.floating-right');

    if (!isLeft && !isRight) {
      if (faqPanel) faqPanel.classList.remove('open');
      if (chatPanel) chatPanel.classList.remove('open');
    }
  });

  // --- Prevent closing when clicking inside panels ---
  if (faqPanel) {
    faqPanel.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
  if (chatPanel) {
    chatPanel.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});