package itec.treetable.service.impl;

import itec.treetable.service.IssueService;
import itec.treetable.domain.Issue;
import itec.treetable.repository.IssueRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Issue.
 */
@Service
@Transactional
public class IssueServiceImpl implements IssueService{

    private final Logger log = LoggerFactory.getLogger(IssueServiceImpl.class);

    private final IssueRepository issueRepository;

    public IssueServiceImpl(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    /**
     * Save a issue.
     *
     * @param issue the entity to save
     * @return the persisted entity
     */
    @Override
    public Issue save(Issue issue) {
        log.debug("Request to save Issue : {}", issue);
        return issueRepository.save(issue);
    }

    /**
     * Get all the issues.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Issue> findAll() {
        log.debug("Request to get all Issues");
        return issueRepository.findAll();
    }

    /**
     * Get one issue by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Issue findOne(Long id) {
        log.debug("Request to get Issue : {}", id);
        return issueRepository.findOne(id);
    }

    /**
     * Delete the issue by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Issue : {}", id);
        issueRepository.delete(id);
    }
}
