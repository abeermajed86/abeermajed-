<script>
// إظهار الزر عند التمرير
window.onscroll = function() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// التمرير لأعلى عند الضغط على الزر
document.getElementById("backToTop").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>