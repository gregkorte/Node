--// For each of the following exercises, provide the appropriate query. Everything from class and the Sqlite documentation for SQL keywords and functions is fair game.

-- Query all of the entries in the Genre table
SELECT * FROM Genre

-- Using the INSERT statement, add one of your favorite artists to the Artist table.
INSERT INTO Artist VALUES(NULL, 'Pink Floyd', 1965)

-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.
INSERT INTO Album VALUES(NULL, 'Saucerful Of Secrets', 'June 29,1968', 39.25, 'EMI Columbia', (SELECT ArtistId FROM Artist WHERE ArtistName = 'Pink Floyd'), (SELECT GenreId FROM Genre WHERE Label = 'Rock' ))

-- Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO Song VALUES(NULL, 'Set the Controls for the Heart of the Sun', 5.27, '8/8/1967', (SELECT GenreId FROM Genre WHERE Label = 'Rock' ), (SELECT ArtistId FROM Artist WHERE ArtistName = 'Pink Floyd'), (SELECT AlbumId FROM Album WHERE Title = 'Saucerful Of Secrets'))

-- Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album and artist you added.
SELECT * FROM Song LEFT JOIN Album ON Song.AlbumId = Album.AlbumId WHERE Album.ArtistId = (SELECT ArtistId FROM Artist WHERE ArtistName = 'Pink Floyd')

--// Reminder: Direction of join matters. Try the following statements and see the difference in results.
-- SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
-- SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;


-- Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT (COUNT(SELECT * FROM Song WHERE Song.AlbumId = Album.AlbumId)) FROM Album 

-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT Title, (SELECT COUNT(*) FROM Song WHERE Song.AlbumId = Album.AlbumId) AS NumberOfSongs FROM Album

-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT Label, (SELECT COUNT(*) FROM Song WHERE Song.GenreId = Genre.GenreId) AS NumberOfSongs FROM Genre

-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
SELECT Album.Title, MAX(Album.AlbumLength) AS AlbumLength FROM Album

-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
SELECT Song.Title, MAX(Song.SongLength) AS SongLength FROM Song

-- Modify the previous query to also display the title of the album.
SELECT Album.Title AS AlbumTitle, Song.Title AS SongTitle, MAX(Song.SongLength) AS SongLength FROM Song, Album WHERE Song.AlbumId = Album.AlbumId
