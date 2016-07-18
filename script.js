var $newIdeaForm = $('.new-idea-form');
var $newIdeaTitle = $('.new-idea-title');
var $newIdeaBody = $('.new-idea-body');
var $ideaList = $('.ideas');
var $clearIdeasButton = $('.clear-ideas');

$newIdeaForm.on('submit', function (event) {
  event.preventDefault();

  var title = $newIdeaTitle.val();
  var body = $newIdeaBody.val();

  $(`
    <article class="idea">
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `).appendTo($ideaList);
});

$clearIdeasButton.on('click', function () {
  $ideaList.html('');
});
