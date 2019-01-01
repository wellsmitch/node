pageInit();

function pageInit() {
    $.extend(XHEDITOR.settings,{shortcuts:{'ctrl+enter':submitForm}});
    $('#con').xheditor({
        html5Upload:false,
        upMultiple:'1',
        width:'100%',
        upLinkExt:'zip,rar,txt',
        upLinkUrl:'upload.html',

        upImgExt:'/users/upIoadImg',
        upImgExt: 'jpg,jpeg,gif,png',

        upFlashExt:'swf',
        upFlashUrl:'upload.html',

        upMediaExt:'wmv,avi,wma,mp3,mid',
        upMediaUrl:'upload.html'
    })
}
