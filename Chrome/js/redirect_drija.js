/**
 * Special case for drija, as they clone askubuntu, serverfault etc
 * questions as well as SO. Regex on the source question is thus a
 * little sloppier and more prone to false positives, so it's spun
 * out separate to the regex for the other sites to focus on drija alone.
 */
var soResults = document.querySelectorAll('a[href*=".com/questions/"]');
document.location = soResults.item(0).href;