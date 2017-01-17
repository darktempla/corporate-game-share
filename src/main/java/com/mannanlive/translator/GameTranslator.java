package com.mannanlive.translator;

import com.mannanlive.entity.GameEntity;
import com.mannanlive.model.Game;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameTranslator {
    private static final String GENRE_SEPARATOR = ",";

    public Game translate(GameEntity entity) {
        Game json = new Game();
        json.getData().setId(String.format("%d", entity.getId()));
        json.getData().getAttributes().setName(entity.getName());
        json.getData().getAttributes().setConsole(entity.getConsole());
        json.getData().getAttributes().setDeveloper(entity.getDeveloper());
        json.getData().getAttributes().setExclusive(entity.isExclusive());
        json.getData().getAttributes().setPublisher(entity.getPublisher());
        json.getData().getAttributes().setReleaseDate(entity.getReleaseDate());
        json.getData().getAttributes().setGenres(addGenres(entity.getGenres()));
        return json;
    }

    private List<String> addGenres(String genreString) {
        String[] genres = genreString.split(GENRE_SEPARATOR);
        List<String> genreList = new ArrayList<>(genres.length);
        for (String genre : genres) {
            genreList.add(genre.trim());
        }
        return genreList;
    }
}
