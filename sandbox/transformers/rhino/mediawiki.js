// some scripts to transform mediawiki data.

// build page url based on the page namespace.
// the onle param row
// will be passed from DataImportHandler as an Array with
// key:value format for each entry.
function buildPageURL(row) {

    var namespace = parseInt(row.get('page_namespace'));
    var title = row.get('page_title');
    var urlBase = 'http://your.wiki.site/wiki/index.php/';
    // Followings are the standard namespaces from a MediaWiki
    // instalation.
    switch(namespace) {
    case 1:
        // main talk page
        prefix = 'Talk:';
        break;
    case 2:
        // user page
        prefix = 'User:';
        break;
    case 3:
        // main talk page
        prefix = 'User_talk:';
        break;
    case 4:
        // main talk page
        prefix = 'Project:';
        break;
    case 5:
        // main talk page
        prefix = 'Project_talk:';
        break;
    // skip 6 for file, we will treat separately.
    case 7:
        // main talk page
        prefix = 'File_talk:';
        break;
    case 8:
        // main talk page
        prefix = 'MediaWiki:';
        break;
    case 9:
        // main talk page
        prefix = 'MediaWiki_talk:';
        break;
    case 10:
        // main talk page
        prefix = 'Template:';
        break;
    case 11:
        // main talk page
        prefix = 'Template_talk:';
        break;
    case 12:
        // main talk page
        prefix = 'Help:';
        break;
    case 13:
        // main talk page
        prefix = 'Help_talk:';
        break;
    case 14:
        // main talk page
        prefix = 'Category:';
        break;
    case 15:
        // main talk page
        prefix = 'Category_talk:';
        break;
    default:
        // main namespace
        prefix = '';
    }
    url = urlBase + prefix + title;
    // adding a new entry named page_url
    // The Solr DIH will use it for url field.
    row.put('page_url', url);

    // strip the wiki markup.
    //orgContent = row.get('page_text');
    return row;
}
