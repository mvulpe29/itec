package itec.treetable.service;

import itec.treetable.domain.Issue;
import java.util.List;

/**
 * Service Interface for managing Issue.
 */
public interface IssueService {

    /**
     * Save a issue.
     *
     * @param issue the entity to save
     * @return the persisted entity
     */
    Issue save(Issue issue);

    /**
     * Get all the issues.
     *
     * @return the list of entities
     */
    List<Issue> findAll();

    /**
     * Get the "id" issue.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Issue findOne(Long id);

    /**
     * Delete the "id" issue.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
