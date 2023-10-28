/*
    Assignment 05
    Author's Name: Yashraj Bhatti
    Date: October 27, 2023
*/

$("document").ready(function () {

    
    class ContentItem {
    
        constructor(id, m_name, description, genre) {
            this.id = id;
            this.m_name = m_name;
            this.description = description;
            this.genre = genre;
        }

        updateContentItem(id, m_name, description, genre) {
            if (this.id === id) {
                if (m_name !== null) {
                    this.m_name = m_name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (genre !== null) {
                    this.genre = genre;
                }
            }
        }

        toString() {
            let content = `<div class="content-item-wrapper" id="content-item-id${this.id}">`;
            content += `<h2>${this.m_name}</h2>`;
            content += `<p>${this.description}</p>`;
            content += `<div>${this.genre}</div>`;
            content += `</div>`;
            return content;
        }
    }

    let movieArray = [
        new ContentItem(0, 'Dilwale Dulhania Le Jayenge', 'A classic Bollywood film directed by Aditya Chopra.', 'Romance'),
        new ContentItem(1, 'Kabhi Khushi Kabhie Gham', 'A family drama Bollywood film directed by Karan Johar.', 'Drama'),
        new ContentItem(2, 'Lagaan', 'A historical epic Bollywood film directed by Ashutosh Gowariker.', 'Drama'),
        new ContentItem(3, '3 Idiots', 'A comedy-drama Bollywood film directed by Rajkumar Hirani.', 'Comedy'),
        new ContentItem(4, 'Kuch Kuch Hota Hai', 'A romantic Bollywood film directed by Karan Johar.', 'Romance')
    ];

    for (let i = 0; i < movieArray.length; i++) {
        const Item = movieArray[i];
        const htmlItem = Item.toString();
        $("#content-item-list").append(htmlItem);
    }

    $('.content-item-wrapper').css({
        'border': '2px solid #ccc',
        'width': '70%',
        'padding': '15px',
        'margin': '30px auto'
      });  

      $('#update-successful').on('click', function () {
        const updateItem = movieArray[0];
        updateItem.updateContentItem(0, 'Dilwale Dulhania Le Jayenge', 'A timeless Bollywood classic directed by Aditya Chopra, known for its iconic love story.', 'Romance');
        const updatedHtml = updateItem.toString();
        $('#content-item-id0').replaceWith(updatedHtml);
    });
    
    $('#update-unsuccessful').on('click', function () {
        const updateItem = movieArray[1];
        updateItem.updateContentItem(1, null, null, null);
        const updatedHtml = updateItem.toString();
        $('#content-item-id1').replaceWith(updatedHtml);
    });

    $('button').css({
    'background-color': 'silver',      
    'color': 'red',                   
    'border': '2px solid #f00',      
    'border-radius': '10px',        
    'padding': '15px',               
    'margin': '20px',
    'cursor': 'pointer'
    });  
});