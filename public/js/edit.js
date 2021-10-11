

const editPostHandler = async(event) => {
  event.preventDefault();
  
  const title= document.querySelector('#blogTitle').value.trim();
  const content= document.querySelector('#blogContent').value.trim();
  
  

  if (title && content) {
    const response = await fetch(`/api/blogs/:id`, {
      method: 'PUT',
      body: JSON.stringify({"title":title, "content":content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to Update Blog');
    }
  }
};


document
  .querySelector('#newBlogPost')
  .addEventListener('click', editPostHandler);

