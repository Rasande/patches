 <?php $args = array(
                'post_type' => 'post',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => 1,
                'tax_query' => array(
                    array (
                        'taxonomy' => 'featured_content',
                        'terms' => 'startsida',
                    )
                ),
            );
            $heroLoop = new WP_Query($args);
            ?>

<div class="hero" >

            <?php if ($heroLoop->have_posts()) :
                while ($heroLoop->have_posts()) : $heroLoop->the_post(); 
                $imgurl = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );?>
                
                    <div class="hero__inner" style="background: url('<?php echo $imgurl ?>');">
               
           
                            <div class="hero__inner--content">
                                <h2><a href="<?php echo get_permalink();?>"><?php the_title(); ?></a></h2>
                                <p><?php the_excerpt(); ?></p>
           
                    </div>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
     
</div>
