

const newPostHandler = async(event) => {
  event.preventDefault();
  console.log("submit clicked");

  const title= document.querySelector('#blogTitle').value.trim();
  const content= document.querySelector('#blogContent').value.trim();
  console.log(title);
  console.log(content);

  if (title && content) {
    const response = await fetch(`/api/blogs/`, {
      method: 'POST',
      body: JSON.stringify({"title":title, "content":content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to Create Blog');
    }
  }
};


document
  .querySelector('#newBlogPost')
  .addEventListener('click', newPostHandler);

