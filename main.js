var quotes = [
    {
        'quote': 'People ignore design that ignores people.',
        'author': 'Frank Chimero (Designer)',
        'tag1': 'design',
        'tag2': 'people'
    },
    {
        'quote': 'Design is not just what it looks and feels like. Design is how it works.',
        'author': 'Steve Jobs (Apple CEO)',
        'tag1': 'design'
    },
    {
        'quote': 'The details are not the details. They make the design.',
        'author': 'Charles Eames',
        'tag1': 'design'
    },
    {
        'quote': 'Great UX is learning, observing, ideating, iterating and testing.',
        'author': 'anonymous',
        'tag1': 'ux'
    },
    {
        'quote': 'You cannot understand good design if you do not understand people.',
        'author': 'Dieter Rams',
        'tag1': 'ux',
        'tag2': 'people'
    },
    {
        'quote': 'If a user is having a problem, it\' our problem.',
        'author': 'anonymous',
        'tag1': 'people'
    },
    {
        'quote': 'We\'re not just designing pages. We\'re designing human experiences.',
        'author': 'Aarron Walter (Author of "Design for Emotion")',
        'tag1': 'ux',
        'tag2': 'design'
    }
];

function findQuotes() {
    for (var i = 0; i < quotes.length; i++) {
        var quoteList = document.getElementById('quote-list');
        if (quotes[i].tag1 === 'ux' || quotes[i].tag2 === 'ux') {
            quoteList.innerHTML += '<li>' + quotes[i].quote + ' - ' + quotes[i].author + '</li>';
        }
    };

}