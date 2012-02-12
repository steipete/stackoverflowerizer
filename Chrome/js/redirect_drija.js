/**
 * Special case for drija, as they clone askubuntu, serverfault etc
 * questions as well as SO. Regex on the source question is thus a
 * little sloppier and more prone to false positives, so it's spun
 * out separate to the regex for the other sites to focus on drija alone.
 *
 * Two options here: Url regex to determine if we're on q page (of form
 * djira.com/TOPIC-WORDS/ID/TITLE) or attempt the queryselector and just
 * see if we've a result. Going with the latter here..
 */
var soResults = document.querySelectorAll('a[href*=".com/questions/"]');
if(soResults.item(0))
{
    document.location = soResults.item(0).href;
}