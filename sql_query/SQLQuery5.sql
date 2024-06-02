WITH RecursiveCTE AS (
  SELECT 
    id, 
    parent_id, 
    name, 
    1 AS sub_level 
  FROM 
    subdivisions 
  WHERE 
    parent_id IS NULL 
  UNION ALL 
  SELECT 
    s.id, 
    s.parent_id, 
    s.name, 
    rc.sub_level + 1 
  FROM 
    subdivisions s 
    INNER JOIN RecursiveCTE rc ON s.parent_id = rc.id
), 
CollsCount AS (
  SELECT 
    subdivision_id, 
    COUNT(*) AS colls_count 
  FROM 
    collaborators 
  GROUP BY 
    subdivision_id
) 
SELECT 
  c.id, 
  c.name, 
  c.subdivision_id AS sub_id, 
  r.name AS sub_name, 
  r.sub_level, 
  cc.colls_count 
FROM 
  collaborators c 
  INNER JOIN RecursiveCTE r ON c.subdivision_id = r.id 
  INNER JOIN CollsCount cc ON c.subdivision_id = cc.subdivision_id 
WHERE 
  c.age < 40 
  AND c.subdivision_id > (
    SELECT 
      subdivision_id 
    FROM 
      collaborators 
    WHERE 
      id = 710253
  ) 
  AND c.subdivision_id NOT IN (100055, 100059) 
ORDER BY 
  c.subdivision_id;
