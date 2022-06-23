package work.nguyentruonganhkiet.api.model.sub;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import work.nguyentruonganhkiet.api.model.entities.React;
import work.nguyentruonganhkiet.api.model.entities.Story;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class ReactStory extends React {
	@ManyToOne
	@JoinColumn(name = "story_id")
	private Story story;
}