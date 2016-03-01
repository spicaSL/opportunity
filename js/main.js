(function($) {
  $(function() {

    /* Show alert when leaving a .gov domain. */
    $('a').click(function(e) {
      console.debug($(this));
      if (!$(this).prop('hostname').match(/\.gov$/)) {
        if (confirm('You are about to leave this web site for a destination ' +
                    'outside of the Federal Government. You may wish to ' +
                    'review each privacy notice since their information ' +
                    'collection practices may differ from ours. In addition, ' +
                    'our linking to these sites does not constitute an ' +
                    'endorsement of any products or services.\n\n' +
                    'Click OK if you wish to continue to the web site, ' +
                    'otherwise click Cancel to return to our site.')) {
          // consinue
        } else {
          e.preventDefault();
        }
      }
    });

  });
})(jQuery);
