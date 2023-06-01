$('.tabs-list li').on('click', function(){
    console.log($(this).find('a').attr('href'));
    
    const selectedTabId = $(this).find('a').attr('href');

    // 先移除所有的active再加上目前點到的li active的css類別
    $('.tabs-list li, .tabs div.tab').removeClass('active');
    $(this).addClass('active');
    // 先移除所有的active再加上目前要呈現的div的active的css類別
    $('.tabs div.tab').removeClass('active');
    $(selectedTabId).addClass('active');

    // 隱藏所有div.tab，再呈現選中的
    $('div.tab').hide();
    $(selectedTabId).show();
})