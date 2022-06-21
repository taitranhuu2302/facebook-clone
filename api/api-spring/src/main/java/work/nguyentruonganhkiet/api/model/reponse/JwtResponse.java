package work.nguyentruonganhkiet.api.model.reponse;


import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class JwtResponse {
	private String token;
	private String type;
	private String id;
	private String username;
	private String email;
	private List<String> roles;
}